FROM node:16 as base

FROM base as builder
WORKDIR /home/app
COPY . ./
RUN npm install

FROM builder as runner
RUN npm i -g pm2
RUN pm2 install pm2-logrotate

CMD ["pm2-logrotate", "start", "app.config.json", "--env", "prod"]
