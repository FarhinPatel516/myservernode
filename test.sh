#!/bin/bash

# install the anuglar dependency
npm install

# build the application
ng build --prod

# remove the container if exists or running
if [ $(docker container ls -a -q --filter name=mynagapp_c) != '' ]; then
    docker container stop mynagapp_c
    docker container rm mynagapp_c
fi

# remove the image if exists
if [ $(docker image ls -a -q --filter reference=ngapp) != '' ]; then
    docker image rm ngapp
fi

# build the image
docker build -t ngapp .

# start the container
docker run -itd -p 9090:80 --name mynagapp_c ngapp