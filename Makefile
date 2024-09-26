DIR=/var/www/html/

init:
	git submodule update --init --recursive

build:
	npx astro build

copy: build
	cp -r dist/* $(DIR)
