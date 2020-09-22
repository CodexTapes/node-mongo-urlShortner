# Stage 1
FROM node:alpine AS base

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

# Stage 2

FROM alpine:latest

RUN apk update && apk add nodejs

WORKDIR /app

COPY --from=base /app .

EXPOSE 3000

RUN npm install -g nodemon

CMD [ "nodemon", "server.js" ]