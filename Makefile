# Tareas definidas

all: check

# Comprobación de la sintaxis de node.js en el fichero usuario.js
check:
	node --check ./src/usuario.js