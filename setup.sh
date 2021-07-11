#!/bin/bash

# Reactの環境構築
docker build . -t onsya
# 3000番ポートで公開
docker run -it -v $(pwd)/app:/usr/src/app -p 3000:3000 --name onsya onsya