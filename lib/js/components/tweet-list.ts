/// <reference path='../typings/react.d.ts' />
/// <reference path='../typings/socket.io-client.d.ts' />
/// <reference path='tweet.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");
import component = require('./Tweet');
import io = require('socket.io-client');

export interface Tweets {
  id: string;
  text: string;
}

export interface TweetListIProps {
}

export interface TweetListIState {
    tweets: Tweets[];
}

class TweetListClass extends TypedReact.Component<TweetListIProps, TweetListIState> {

    getInitialState() {
      return {
        tweets: []
      }
    }

    componentDidMount() {
      var socket = io('http://localhost:8080');

      /*socket.on('tweets-data', (data) => {
        var newState = React.addons.update(this.state, {
          tweets: {
            $unshift: [{ id: data.id, text: data.text }]
          }
        });
        this.setState(newState);
      });*/

      socket.on('connect', (data) => {
        socket.emit('get-tweets-data');
      });

    }

    render() {

        /*var tweets = this.state.tweets.map((result) => {
          React.createElement(component.Tweet, { key: result.id, text: result.text }, null)
        });*/

        return React.DOM.div({ className: "tweetList" }, null);
    }
}

export var TweetList = TypedReact.createClass(TweetListClass);
