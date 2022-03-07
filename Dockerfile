FROM nginx:1.21.5-alpine

## Copy nginx conf to image
COPY config/default.conf /etc/nginx/conf.d/default.conf

## Copy build assets to nginx serve root path
COPY ./docs/ /usr/share/nginx/html/
