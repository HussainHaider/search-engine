FROM node:14 AS builder
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
