FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.docker /usr/src/app/.env

EXPOSE 2200
CMD [ "npm", "start" ]
