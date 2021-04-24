FROM node:15.14.0-alpine3.10

RUN apk add bash

WORKDIR /usr/app

COPY package* .
#COPY *.js .

RUN npm install

EXPOSE 3000
