#!/bin/bash
rsync -zcrSLh --exclude=".git" ./ admin@filmfuse.com:~/go/src/github.com/tylerwaitt/filmfuse-api
ssh admin@filmfuse.com "cd ~/go/src/github.com/tylerwaitt/filmfuse-api && go install && sudo service ff restart"

