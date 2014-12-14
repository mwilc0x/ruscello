WELCOME=\033[37m--------------------- Twitter Stream Using Go, Socket.io, and ReactJs 👍 -----------------------------\033[39m

all: hello react server browser

hello:
	@echo "\n${WELCOME}\n"

server:
	@go run main.go

react:
	@watchify -t reactify lib/js/app.js -o bundle.js

browser:
	@browser-sync start --files "*.js" --server
