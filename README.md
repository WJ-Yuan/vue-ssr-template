<h1 align="center">
  🔥Vue SSR Template
</h1>

<div align="center">
  <div>
    <a href="https://vuejs.org/">
      <img src="https://img.shields.io/static/v1?label=vue&message=v3.3.4&color=rgb(66 184 131)" alt="vue@3.3.4" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/static/v1?label=vite&message=v4.3.9&color=rgb(100 108 255)" alt="vite@4.3.9" />
    </a>
  </div>
   <div style="font-size: 16px; margin-top: 12px">A vue ssr template created by vite</div>
</div>

## 📚 Specification

### core

![express](https://img.shields.io/static/v1?label=express&message=v4.18.2)
![typescript](https://img.shields.io/static/v1?label=typescript&message=v5.0.4&color=blue)
![vue-router](https://img.shields.io/static/v1?label=vue-router&message=v4.2.2&color=green)
![pinia](<https://img.shields.io/static/v1?label=pinia&message=v2.1.3&color=rgb(255,216,89)>)
![vue-i18n](<https://img.shields.io/static/v1?label=vue-i18n&message=v9.4.1&color=rgb(62,175,124)>)

### css

![sass](<https://img.shields.io/static/v1?label=sass&message=v1.68.0&color=rgb(204,10,153)>)
![unocss](https://img.shields.io/static/v1?label=unocss&message=v0.56.4)

### lint

![eslint](<https://img.shields.io/static/v1?label=eslint&message=v8.39.0&color=rgb(183,183,255)>)
![prettier](<https://img.shields.io/static/v1?label=prettier&message=v2.8.8&color=rgb(248,188,69)>)

## 🏠 Project Framework

```sh
root
  |
  |_ e2e # for e2e test
  |_ env # for environment variables
    |
    |_ .env # common env
    |_ .env.dev # development env
    |_ .env.prod # production env
  |_ public # public assets
  |_ src # main src
    |
    |_ @types # typescript .d.ts file
    |_ api # axios api request
    |_ composables # common vue hooks
    |_ components # common components
    |_ constants # common constants
    |_ router # vue-router config
    |_ store # pinia
    |_ utils # common utils
    |_ views # fe page
  |_ ...
  |_ Dockerfile # for build docker image
  |_ .eslintrc.cjs # eslint config
  |_ .prettierrc.json # prettier config
  |_ index.html # root html
  |_ playwright.config.ts # playwright config for e2e test
  |_ server.js # ssr server root
  |_ vite.config.ts # vite config
  |_ vitest.config.ts # vitest config for unit test
```

## ⌨️ Development

```sh
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev
```

## 🌐 Production

### build

```sh
npm run build
```

### preview

```sh
# for local preview
npm run server
```

### production

You can run project in `docker` or remote server by pm2.

## 🛠️ Test

```sh
# unit test
npm run test:unit

# e2e test
npm playwright install # prerequisite before first test
npm run test:e2e
```

## 👍 Vscode Extension Recommend

- [Vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Vue.vscode-typescript-vue-plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [vitest-explorer](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)
- [ms-playwright.playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [antfu.unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
