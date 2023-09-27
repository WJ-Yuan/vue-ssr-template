import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { config } from 'dotenv'
import { BASE_URL, BASE_URL_WITH_SLASH } from './base.js'

await Promise.resolve(config({ path: `${process.cwd()}/env/.env.${process.env.MODE}` }))

const app = express()
const router = express.Router()

const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 80
const routerBase = `/${BASE_URL}`

const root = process.cwd()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(__dirname, p)

function registerRouter() {
  app.use(`${routerBase}`, router)
  app.use('/', (_, res) => {
    res.redirect(`${routerBase}/home`)
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
      BASE_URL_WITH_SLASH,
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
      const url = req.originalUrl.replace(BASE_URL_WITH_SLASH, '/')

      console.log(req.originalUrl, url)
      let template, render

      if (!isProd) {
        template = readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server')).render
      } else {
        template = indexProd
        render = (await import('./dist/server/entry-server.js')).render
      }
      const [appHtml, preloadLinks] = await render(url, manifest)

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
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
  await registerRouter()
  await registerViteMiddleWare()
  app.listen(port, () => {
    console.log(`This server is running at http://localhost:${port}`)
  })
})()
