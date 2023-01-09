FROM ubuntu:latest

RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app

RUN groupadd groupTest && useradd -g groupTest userTest && \
    chown -R userTest:groupTest /app && \
    apt-get update && apt-get upgrade && \
    apt-get install -y --no-install-recommends npm && npm install

USER userTest

ENTRYPOINT [ "npm", "run", "test" ]


