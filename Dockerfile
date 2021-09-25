FROM node:16-alpine3.13 AS build

WORKDIR /src

COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.21.3-alpine

COPY --from=build /src/build /usr/share/nginx/html

EXPOSE 80 433