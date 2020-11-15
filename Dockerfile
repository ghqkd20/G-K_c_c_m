FROM node:14.5.0

WORKDIR /usr/src/app
COPY package*.json ./


RUN yarn
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]