FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine-perl as production-stage
COPY nginx/ /etc/nginx/
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
