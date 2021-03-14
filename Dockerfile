# pull official base image
FROM node:14.16.0-alpine

# set working directory
WORKDIR /app

# add app
COPY . ./

# install app dependencies
RUN npm install --silent