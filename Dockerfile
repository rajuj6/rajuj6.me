FROM ubuntu:20.04

# Update Ubuntu
RUN apt-get update ; apt-get dist-upgrade -y -qq

# Install Apache + modules
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y -qq --no-install-recommends apache2 && \
    a2enmod proxy proxy_http proxy_ajp rewrite deflate headers proxy_connect proxy_html lbmethod_byrequests && \
    mkdir /var/lock/apache2 && mkdir /var/run/apache2

# Config Apache
COPY ./docs/ /var/www/html/
COPY rajuj6-me.conf  /etc/apache2/sites-enabled/rajuj6-me.conf

EXPOSE 80
CMD apache2ctl -D FOREGROUND

