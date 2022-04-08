FROM node:14

WORKDIR /var/www/montanari-tech
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn start