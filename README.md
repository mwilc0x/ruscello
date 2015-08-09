ruscello
========

> _Translation: stream_

an experimental TypeScript redux implementation

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

*This project has been updated to use ES6 modules, JSX, and redux.*

This is experimental and I made it just for fun! :D

I tried to keep this very minimalistic on purpose. Feel free to fork or clone and hack.

The example is using [cheerio](https://github.com/cheeriojs/cheerio) to scrape NYT Best Sellers list and ship it to UI via [socket.io](https://github.com/Automattic/socket.io).

Under the hood it is using [redux](https://github.com/gaearon/redux). Right now I've added type definitions as needed for redux, my goal is to get a more stable version in the future. The rest of the type definitions are managed using [tsd](https://github.com/DefinitelyTyped/tsd).

## TODO
- [X] Get JSX support working with TypeScript
- [X] Switch to [redux](https://github.com/gaearon/redux)
- [ ] Stable version of Redux Type Definitions

## Contributing
Contributions are welcome, submit a PR or file an issue.

## Thank You
Thanks to the Flux and ReactJS teams as well as the folks at Asana for their ReactJS TypeScript work! Thanks to Dan Abramov for creating the awesome redux state container! Thanks to all who contributed to the type definitions.

## License
MIT License
