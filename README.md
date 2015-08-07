ruscello
========

> _Translation: stream_

an experimental TypeScript Flux implementation

![stream](/stream.jpeg)

### Usage:

Note: Currently I am using [babel-node](https://babeljs.io/docs/usage/cli/#babel-node) to run the node server. It comes standard with the [babel package](https://babeljs.io/docs/setup/#babel_cli).

To install npm + tsd dependencies and run the app:

```bash
make
```

If you just want to run the app:

```bash
make dev
```

## About
This is experimental and I made it just for fun! :D

This has been updated to use ES6 modules as well as jsx in TypeScript.

I followed the structure of the chat example from [flux](https://github.com/facebook/flux/tree/master/examples/flux-chat) and implemented it in [TypeScript](https://github.com/Microsoft/TypeScript).

I kept this very minimalistic on purpose. Feel free to fork or clone and hack.

The example is using [cheerio](https://github.com/cheeriojs/cheerio) to scrape NYT Best Sellers list and ship it to UI via [socket.io](https://github.com/Automattic/socket.io).

Under the hood it is using [flux](https://github.com/facebook/flux) with
the corresponding [type definitions](https://github.com/borisyankov/DefinitelyTyped/tree/master/flux). The type definitions are managed using [tsd](https://github.com/DefinitelyTyped/tsd).

## TODO
- [X] Get JSX support working with TypeScript
- [ ] switch to [redux](https://github.com/gaearon/redux)

## Contributing
Contributions are welcome, submit a PR or file an issue.

## Thank You
Thanks to the Flux and ReactJS teams as well as the folks at Asana for their ReactJS TypeScript work! Also, thank you to all who contributed to the type definitions.

## License
MIT License
