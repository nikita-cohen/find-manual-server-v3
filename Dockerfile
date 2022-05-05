FROM node:alpine
WORKDIR /netan/docker-new
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]

