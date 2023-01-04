FROM ubuntu:latest

RUN mkdir -p /app/test

WORKDIR /app/test

RUN groupadd -r group && useradd -r -g group user && chown -R user:group /app

COPY package.json /app
RUN apt-get update && apt-get install -y npm && npm install

USER user

ENTRYPOINT [ "npm", "run", "test" ]


