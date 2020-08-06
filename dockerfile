FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD [ "node", "src/index.js" ]