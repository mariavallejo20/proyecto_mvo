FROM phusion/baseimage:jammy-1.0.1

RUN mkdir -p /home/userTest/app/test /home/userTest/.npm

WORKDIR /home/userTest/app/test

RUN groupadd groupTest && useradd -g groupTest userTest && \
    chown -R userTest:groupTest /home/userTest/app/test && \
    chown -R userTest:groupTest /home/userTest/.npm

COPY package.json ./

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y --no-install-recommends npm

USER userTest

RUN npm install

ENTRYPOINT [ "npm", "run", "test" ]


