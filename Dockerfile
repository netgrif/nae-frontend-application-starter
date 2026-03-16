FROM node:20-alpine AS build
WORKDIR /app
LABEL authors="NETGRIF <devops@netgrif.com>"

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build


FROM nginx:alpine
LABEL authors="NETGRIF <devops@netgrif.com>"

COPY default.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/template-frontend/ /usr/share/nginx/html/

EXPOSE 80
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
