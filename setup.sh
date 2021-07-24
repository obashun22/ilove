#!/bin/bash

# Reactの環境構築
docker build . -t onsya
# moduleインストール
docker run -it --rm -v $(pwd)/app:/usr/src/app onsya yarn install