import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type UserConfig } from 'vite'
// plugins
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/dist/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
// @ts-ignore
import { BASE_URL_WITH_SLASH } from './server/base.js'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config: UserConfig = {
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
        }
      }),
      Components(),
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

  return config
})
