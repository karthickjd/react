# Stage 1: Build the Node.js application
FROM node:18-alpine3.17

WORKDIR /usr/app

COPY package*.json /usr/app

RUN npm install 

COPY . .

EXPOSE 3002

CMD ["npm" , "start"]
