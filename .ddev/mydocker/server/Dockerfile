
FROM node:lts

# Install Node.js
RUN dpkg --add-architecture i386
RUN apt-get update
RUN apt-get install --yes curl git
RUN apt-get install --yes wine32 wine64
RUN apt-get -y install x11-apps libgtkextra-dev libgconf2-dev libx11-xcb1 libnss3 libasound2 libxtst-dev libxss1 libgconf-2-4 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev libnss3-dev libxss-dev
RUN apt-get -y install nautilus fontconfig libcanberra-gtk-module libcanberra-gtk0

RUN npm i -g npm-check-updates serve

ENV SHELL=/bin/bash
RUN ["rm","/bin/sh"]
RUN ["ln", "-s", "/bin/bash", "/bin/sh"]

WORKDIR /home/node/app
USER node
#
## Or just use EXPORT 8080
ENV HOST 0.0.0.0
ENV DISPLAY :0
## If yout want use vue-cli UI you need to also EXPORT 8000
#
## set app serving to permissive / assigned
#ENV NUXT_HOST=0.0.0.0
## set app port
#ENV NUXT_PORT=5000