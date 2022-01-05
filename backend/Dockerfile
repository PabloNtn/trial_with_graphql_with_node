FROM node:alpine

LABEL maintainer "Pablo Monteiro <pablo.monteiro@2rpnet.com"

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]