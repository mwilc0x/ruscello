/// <reference path='../typings/react.d.ts' />
/// <reference path='../typings/socket.io-client.d.ts' />
/// <reference path='tweet.react.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import React_Addons = require('react/addons');
import TypedReact = require("typed-react");
import component = require('./tweet.react');
import io = require('socket.io-client');

interface Tweets {
  id: string;
  text: string;
}

interface TweetListIProps {
}

interface TweetListIState {
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

      socket.on('tweets-data', (data) => {

        var newState = React_Addons.addons.update(this.state, {
          tweets: {
            $unshift: [{ id: data.id, text: data.text }]
          }
        });
        this.setState(newState);
      });

      socket.on('connect', (data) => {
        socket.emit('get-tweets-data');
      });

    }

    render() {
        var tweets = this.state.tweets.map((result) => {
          return React.createElement(component.Tweet, { key: result.id, text: result.text }, null);
        });

        return React.DOM.div({ className: "tweetList" }, tweets);
    }
}

export var TweetList = TypedReact.createClass(TweetListClass);
