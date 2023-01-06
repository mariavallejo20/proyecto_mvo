FROM ubuntu:latest

RUN mkdir -p /app/test

WORKDIR /app/test

RUN groupadd groupTest && useradd -g groupTest userTest && chown -R userTest:groupTest /app

COPY package.json /app
RUN apt-get update && apt-get install -y npm && npm install

USER userTest

ENTRYPOINT [ "npm", "run", "test" ]


