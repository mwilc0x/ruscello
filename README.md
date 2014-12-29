ruscello
========

a TypeScript Flux implementation

### Usage:
```bash
npm install
node_modules/.bin/tsd update -so
npm start
```

## About
I kept this very minimalistic on purpose. Feel free to fork or clone and hack.

Everything is written in [TypeScript](https://github.com/Microsoft/TypeScript) and is using [tsd](https://github.com/DefinitelyTyped/tsd) to manage the type definitions.

The example is using [cheerio](https://github.com/cheeriojs/cheerio) to scrape NYT Best Sellers list and ship it to UI via [socket.io](https://github.com/Automattic/socket.io).

Under the hood it is using [facebook's flux](https://github.com/facebook/flux) with
the corresponding [type definitions](https://github.com/borisyankov/DefinitelyTyped/tree/master/flux).

Also, I am using [typed-react](https://github.com/Asana/typed-react) to help implement React components
in TypeScript.

## TODO
* Get JSX support working with TypeScript [see here](https://github.com/facebook/react/issues/759)
* ...

## Contributing
Contributions are welcome, submit a PR or file an issue.

## License
MIT License
