DIR=/var/www/html/

# To add submodules use in root directory:
#	git submodule add <url> public/...

.PHONY: init build copy clean


copy: build
	rm -rf $(DIR)/url
	cp -r dist/* $(DIR)

init:
	npm install
	git submodule update --init --recursive

build:
	npx astro build


clean:
	rm -rf dist
