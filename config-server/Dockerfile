FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g typescript

RUN npm install

# Bundle app source
COPY . .

RUN tsc

RUN apk --no-cache add curl

EXPOSE 1901

CMD [ "node", "./build/server.js" ] 
