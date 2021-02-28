FROM node:lts-alpine3.12

WORKDIR /usr/app

COPY package.json .

COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 3005

CMD ["npm", "start"]

