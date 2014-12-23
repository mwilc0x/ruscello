WELCOME=\033[37m🌊🌊🌊🌊🌊🌊🌊🌊🌊 ruscello: a TypeScript Flux implementation 🌊🌊🌊🌊🌊🌊🌊🌊🌊\033[39m

all: hello react server browser

hello:
	@echo "\n${WELCOME}\n"

server:
	@node server.js

react:
	@watchify -p [tsify] -t reactify lib/js/app.ts -o bundle.js

browser:
	@browser-sync start --files "*.js" --server
