FROM node:16 as base

FROM base as builder
WORKDIR /home/app
COPY . ./
RUN npm install

FROM builder as runner
RUN npm i -g pm2

CMD ["pm2", "start", "app.config.json", "--env", "prod"]
