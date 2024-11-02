FROM node:20-alpine

RUN apk update && apk add git
COPY package.json .
RUN npm install
COPY . .
EXPOSE 7070

CMD ["node", "index.js"]
