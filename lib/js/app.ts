/// <reference path='../../typings/ruscello.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");
import component = require('./components/book-bestseller-list.react');
import RuscelloWebAPI = require('./utils/ruscello-web-api');

interface AppIProps {}
interface AppIState {}

class AppClass extends TypedReact.Component<AppIProps, AppIState> {
    render() {
          return React.createElement(component.BestSellerList, null, null);
    }
}

export var App = React.createFactory(TypedReact.createClass<AppIProps, AppIState>(AppClass));

window.onload = function () {
  var webAPI = new RuscelloWebAPI(),
      app = App({});

  webAPI.initData();
  React.render(app, document.getElementById("bestSellerList"));
};
