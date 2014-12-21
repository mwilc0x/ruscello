/// <reference path='../typings/react.d.ts' />
/// <reference path='../typings/socket.io-client.d.ts' />
/// <reference path='tweet.react.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import React_Addons = require('react/addons');
import TypedReact = require("typed-react");
import component = require('./tweet.react');
import io = require('socket.io-client');
import TweetStore = require('../stores/tweet-store');

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

    private _tweetStore: TweetStore;

    constructor() {
      super();
      this._tweetStore = new TweetStore();
    }

    getInitialState() {
      return {
        tweets: []
      }
    }

    componentDidMount() {
      this._tweetStore.addChangeListener(this._onChange);
    }

    render() {
        var tweets = this.state.tweets.map((result) => {
          return React.createElement(component.Tweet, { key: result.id, text: result.text }, null);
        });

        return React.DOM.div({ className: "tweetList" }, tweets);
    }

    private _getStateFromStores() {
      return {
        tweets: this._tweetStore.get()
      };
    }

    private _onChange() {
      this.setState(this._getStateFromStores());
    }

}

export var TweetList = TypedReact.createClass(TweetListClass);
