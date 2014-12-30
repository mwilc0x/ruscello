ruscello
========

> _Translation: stream_

a TypeScript Flux implementation

![stream](/stream.jpeg)

### Usage:
```bash
npm install
node_modules/.bin/tsd update -so
npm start
```

## About
This is experimental and I made it just for fun! :D

I followed the structure of the chat example from [flux](https://github.com/facebook/flux/tree/master/examples/flux-chat) and implemented it in [TypeScript](https://github.com/Microsoft/TypeScript).

I kept this very minimalistic on purpose. Feel free to fork or clone and hack.

The example is using [cheerio](https://github.com/cheeriojs/cheerio) to scrape NYT Best Sellers list and ship it to UI via [socket.io](https://github.com/Automattic/socket.io).

Under the hood it is using [flux](https://github.com/facebook/flux) with
the corresponding [type definitions](https://github.com/borisyankov/DefinitelyTyped/tree/master/flux). The type definitions are managed using [tsd](https://github.com/DefinitelyTyped/tsd).

Also, [typed-react](https://github.com/Asana/typed-react) is used to help implement React components
in TypeScript.

## TODO
* Get JSX support working with TypeScript [see here](https://github.com/facebook/react/issues/759)
* ...

## Contributing
Contributions are welcome, submit a PR or file an issue.

## Thank You
Thanks to the Flux and ReactJS teams as well as the folks at Asana for their ReactJS TypeScript work! Also, thank you to all who contributed to the type definitions.

## License
MIT License
