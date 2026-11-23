FROM node:22 as build
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build


FROM nginx:alpine

LABEL org.opencontainers.image.title="eTASK" \
      org.opencontainers.image.authors="devops@netgrif.com" \
      org.opencontainers.image.url="https://etask.netgrif.cloud" \
      org.opencontainers.image.vendor="NETGRIF, s.r.o."

COPY default.nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/40-env.sh /docker-entrypoint.d/40-env.sh
COPY --from=build /app/dist/template-frontend/ /usr/share/nginx/html/
COPY src/env.template.js /usr/share/nginx/html/env.template.js
RUN chmod +x /docker-entrypoint.d/40-env.sh

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
