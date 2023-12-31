import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { BASE_URL, BASE_URL_WITH_SLASH } from './base.js'

const app = express()
const router = express.Router()

const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 80
const routerBase = `/${BASE_URL}`
const apiUrl = process.env.API_URL || 'http://localhost:8080'

const root = process.cwd()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(__dirname, '../', p)

function registerRouter() {
  app.use(`${routerBase}`, router)
  app.use('/', (_, res) => {
    res.redirect(`${routerBase}/home`)
  })
}

function registerApiMiddleware() {
  const pathRewrite = {}
  pathRewrite[`^${BASE_URL_WITH_SLASH || '/'}api`] = ''

  router.use(
    `^${BASE_URL}/api`,
    createProxyMiddleware({
      target: apiUrl,
      xfwd: true,
      pathRewrite,
      // secure: false, // for https proxy
      changeOrigin: true,
      onProxyReq(proxyReq, req) {
        const contentType = req.headers['content-type'] || ''

        if (req.body && contentType.indexOf('multipart/form-data') !== 0) {
          const bodyData = JSON.stringify(req.body)
          proxyReq.setHeader('Content-Type', 'application/json')
          // eslint-disable-next-line no-undef
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
          proxyReq.write(bodyData)
        }
      }
    })
  )
}

function registerLanguageMiddleware() {
  router.use('*', (req, res, next) => {
    const acceptLangList = ['en', 'zh']
    const lang = req.acceptsLanguages(acceptLangList)
    req.lang = lang
    next()
  })
}

async function registerViteMiddleWare() {
  let vite

  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      base: BASE_URL_WITH_SLASH,
      root,
      logLevel: 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
          port
        }
      },
      appType: 'custom'
    })

    router.use(vite.middlewares)
  } else {
    router.use((await import('compression')).default())
    router.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false
      })
    )
  }

  const indexProd = isProd ? readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''
  const manifest = isProd
    ? JSON.parse(readFileSync(resolve('dist/client/ssr-manifest.json'), 'utf-8'))
    : {}

  router.use('*', async (req, res) => {
    try {
      const url = BASE_URL_WITH_SLASH
        ? req.originalUrl.replace(BASE_URL_WITH_SLASH, '/')
        : req.originalUrl

      let template, render

      if (!isProd) {
        template = readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server')).render
      } else {
        template = indexProd
        render = (await import('../dist/server/entry-server.js')).render
      }
      const [appHtml, preloadLinks, state] = await render(url, manifest, req)

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`'<pinia-store>'`, state)
        .replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })
}

;(async function startServer() {
  registerRouter()
  registerLanguageMiddleware()
  registerApiMiddleware()
  await registerViteMiddleWare()
  app.listen(port, () => {
    console.log(`This server is running at http://localhost:${port}`)
  })
})()
