/// <reference path='typings/react.d.ts' />
/// <reference path='typings/ruscello.d.ts' />
/// <reference path='components/tweet-list.react.ts' />
/// <reference path='../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react/addons');
import TypedReact = require("typed-react");
import component = require('./components/tweet-list.react');
import RuscelloWebAPI = require('./utils/ruscello-web-api');

interface AppIProps {}
interface AppIState {}

class AppClass extends TypedReact.Component<AppIProps, AppIState> {
    render() {
          return React.DOM.div(null, React.createElement(component.TweetList, null, null));
    }
}

export var App = React.createFactory(TypedReact.createClass<AppIProps, AppIState>(AppClass));

window.onload = function () {
  var webAPI = new RuscelloWebAPI(),
      app = App({});

  webAPI.initData();
  React.render(app, document.getElementById("tweets"));
};
