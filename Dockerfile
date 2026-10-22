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
COPY --from=build /app/dist/template-frontend/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
