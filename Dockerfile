FROM node:16.4-slim
WORKDIR /usr/src/app
CMD yarn install && yarn start