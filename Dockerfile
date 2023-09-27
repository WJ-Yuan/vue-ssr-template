FROM node:16 as base

FROM base as builder
WORKDIR /home/app
COPY . ./
RUN npm install pnpm -g
RUN pnpm install && pnpm builder

FROM builder as runner
RUN pnpm i -g pm2
RUN pm2 install pm2-logrotate

CMD ["pm2-logrotate", "start", "app.config.json", "--env", "prod"]
