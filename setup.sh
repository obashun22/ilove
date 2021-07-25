#!/bin/bash

# Reactの環境構築
docker build . -t ilove
# moduleインストール
docker run -it --rm -v $(pwd)/app:/usr/src/app ilove yarn install