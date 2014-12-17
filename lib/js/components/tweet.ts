/// <reference path='../typings/react.d.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");

export interface TweetIProps {
    text: string;
}

class TweetClass extends TypedReact.Component<TweetIProps, {}> {
    render() {
        return React.DOM.div({ className: "tweet" }, this.props.text);
    }
}

export var Tweet = TypedReact.createClass(TweetClass);
