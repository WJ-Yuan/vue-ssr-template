import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, type UserConfig } from 'vite'
// plugins
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/dist/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
// @ts-ignore
import { BASE_URL_WITH_SLASH } from './server/base.js'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const env = loadEnv(mode, process.cwd(), '')

  const baseConfig: UserConfig = {
    base: BASE_URL_WITH_SLASH,
    plugins: [
      vue(),
      vueJsx(),
      VueMacros(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: true,
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        },
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      Unocss({
        presets: [presetUno(), presetAttributify()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }

  const devConfig: UserConfig = {
    ...baseConfig,
    define: {
      'process.env': env
    }
  }

  const config: UserConfig = isProd ? baseConfig : devConfig

  return config
})
