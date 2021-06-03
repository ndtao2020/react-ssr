FROM node:14-alpine as base

WORKDIR /app

FROM base as dev
CMD [ "npm", "start" ]

FROM base as prod

ARG REDISHOST
ARG REDISPORT
ARG REDISPASSWORD
ARG REDIS_URL

ENV REDIS_HOST=${REDISHOST}
ENV REDIS_PORT=${REDISPORT}
ENV REDIS_PASSWORD=${REDISPASSWORD}
ENV REDIS_URL=${REDIS_URL}

# add app
COPY . ./

# install app dependencies
RUN npm install

# fix severity vulnerabilities
RUN npm audit fix

# run build
RUN npm run build

CMD [ "node", "build" ]