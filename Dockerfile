FROM node:boron
WORKDIR /
# Install app dependencies
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8888
CMD [ "npm", "start" ]