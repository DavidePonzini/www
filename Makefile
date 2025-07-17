SHELL := /bin/bash

VENV=./venv
REQUIREMENTS_SERVER=server/requirements.txt

ifeq ($(OS),Windows_NT)
	VENV_BIN=$(VENV)/Scripts
else
	VENV_BIN=$(VENV)/bin
endif

DEV_DOCKER_COMPOSE_FILE = docker-compose.yml
PROD_DOCKER_COMPOSE_FILE = docker-compose.prod.yml

.PHONY: $(VENV)_upgrade start deploy clean

start:
	docker compose -f $(DEV_DOCKER_COMPOSE_FILE) down
	docker compose -f $(DEV_DOCKER_COMPOSE_FILE) up --build

deploy:
	docker compose -f $(PROD_DOCKER_COMPOSE_FILE) down
	docker compose -f $(PROD_DOCKER_COMPOSE_FILE) up -d --build

psql:
	docker exec -it www_db psql -U postgres


$(VENV):
	python -m venv $(VENV)
	$(VENV_BIN)/python -m pip install --upgrade -r $(REQUIREMENTS_SERVER)

$(VENV)_upgrade: $(VENV)
	$(VENV_BIN)/python -m pip install --upgrade -r $(REQUIREMENTS_SERVER)

clean:
	find . -type d -name '__pycache__' -print0 | xargs -0 rm -r
