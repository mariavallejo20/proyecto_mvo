# Variables
ficheros = $(shell ls ./src/*.js)

# Tareas definidas

all: check

# Comprobación de la sintaxis de node.js en los ficheros
check:
	$(foreach fichero, $(ficheros), node --check $(fichero);)

# Testeamos la lógica de negocio

test:
	mocha ./tests