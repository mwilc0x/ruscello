/// <reference path='typings/react-addons.d.ts' />
/// <reference path='components/tweet-list.ts' />
/// <reference path='../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react/addons');
import TypedReact = require("typed-react");
import component = require('./components/tweet-list');

export interface AppProps {
}

export interface AppState {
}

class AppClass extends TypedReact.Component<AppProps, AppState> {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        React.render(
          React.DOM.div(null, React.createElement(component.TweetList, null, null)), document.getElementById("tweets")
        )
    }
}

export var App = React.createFactory(TypedReact.createClass<AppProps, AppState>(AppClass));
