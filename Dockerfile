FROM ubuntu:latest

# Creación del directorio /app/test
RUN mkdir -p /app/test

WORKDIR /app/test

# Creación de un usuario y ajuste de los privilegios
RUN groupadd -r group && useradd -r -g group user
RUN chown -R user:group /app

# Copia del fichero package.json en /app e instalación de las dependencias
COPY package.json /app
RUN apt-get install npm && npm install

# Configuración del entrypoint
ENTRYPOINT [ "npm", "run", "test" ]


