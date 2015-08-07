WELCOME=\033[37m🌊🌊🌊🌊🌊🌊🌊🌊🌊 ruscello: a TypeScript Flux implementation 🌊🌊🌊🌊🌊🌊🌊🌊🌊\033[39m

all: hello npm-install typings start

dev: hello start

hello:
	@echo "\n${WELCOME}\n"

npm-install:
	@npm install

typings:
	@./node_modules/.bin/tsd update -so

start:
	@babel-node server.js
