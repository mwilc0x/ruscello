/// <reference path='../typings/eventemitter2.d.ts' />

import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');
import RuscelloUtils = require('../utils/ruscello-web-api');
import Events = require('eventemitter2');

class TweetStore extends Events.EventEmitter2 {

  private _dispatcher: typeof RuscelloDispatcher;
  private _actionTypes: ActionTypes;
  private _CHANGE_EVENT: string;
  private _tweets: Tweet[];

  constructor() {
    super();
    this._dispatcher = RuscelloDispatcher;
    this._actionTypes = new RuscelloConstants().ActionTypes();
    this._CHANGE_EVENT = 'change';
    this._tweets = [];
    this._dispatcher.register(this._dispatchToken.bind(this));
  }

  emitChange() {
    this.emit(this._CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(this._CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this._CHANGE_EVENT, callback);
  }

  getTweets() {
    return this._tweets;
  }

  private _addTweet(data) {
    this._tweets.unshift(data.tweet);
  }

  private _dispatchToken(payload: any) {
    var action = payload.action;

    switch(action.type) {

      case this._actionTypes.RECEIVE_RAW_TWEET:
        this._addTweet(action);
        this.emitChange();
        break;

      default:
        // do nothing
    }
  }

}

export = TweetStore;
