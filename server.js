import { config } from 'dotenv'
import process from 'process'

const rewriteEnv = async () => {
  await Promise.resolve(config({ path: `${process.cwd()}/env/.env` }))
  await Promise.resolve(config({ path: `${process.cwd()}/env/.env.${process.env.MODE}` }))
}

const runServer = async () => {
  try {
    await import('./app.js')
  } catch (error) {
    console.log(error)
  }
}

await rewriteEnv()
await runServer()
