/// <reference path='typings/react.d.ts' />
/// <reference path='components/tweet-list.ts' />
/// <reference path='../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react/addons');
import TypedReact = require("typed-react");
import component = require('./components/tweet-list');

interface AppIProps {}

interface AppIState {}

class AppClass extends TypedReact.Component<AppIProps, AppIState> {
    render() {
          return React.DOM.div(null, React.createElement(component.TweetList, null, null));
    }
}

export var App = React.createFactory(TypedReact.createClass<AppIProps, AppIState>(AppClass));

window.onload = function () {
    var app = App({});
    React.render(app, document.getElementById("tweets"));
};
