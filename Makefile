SHELL := /bin/bash

VENV=./venv
REQUIREMENTS_SERVER=server/requirements.txt

ifeq ($(OS),Windows_NT)
	VENV_BIN=$(VENV)/Scripts
else
	VENV_BIN=$(VENV)/bin
endif

.PHONY: $(VENV)_upgrade start deploy clean

start:
	docker compose --profile dev down
	docker compose --profile dev up --build

deploy:
	docker compose --profile prod down
	docker compose --profile prod up -d --build

psql:
	docker exec -it www_db psql -U postgres


$(VENV):
	python -m venv $(VENV)
	$(VENV_BIN)/python -m pip install --upgrade -r $(REQUIREMENTS_SERVER)

$(VENV)_upgrade: $(VENV)
	$(VENV_BIN)/python -m pip install --upgrade -r $(REQUIREMENTS_SERVER)

clean:
	find . -type d -name '__pycache__' -print0 | xargs -0 rm -r
