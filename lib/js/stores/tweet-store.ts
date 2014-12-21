/// <reference path='../typings/eventemitter2.d.ts' />

import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');
import RuscelloUtils = require('../utils/ruscello-web-api');
import EventEmitter = require('eventemitter2');

class TweetStore extends EventEmitter2 {

  private _dispatcher: RuscelloDispatcher;
  private _actionTypes: any;
  private _utils: RuscelloUtils;
  private _eventEmitter: any;
  private CHANGE_EVENT: string;
  private _tweets: any[];

  constructor() {

    super();

    this._dispatcher = new RuscelloDispatcher();
    this._actionTypes = new RuscelloConstants().ActionTypes();
    this._utils = new RuscelloUtils();
    this._eventEmitter = EventEmitter.EventEmitter2;

    this.CHANGE_EVENT = 'change';

    this._dispatcher.register(this._dispatchToken);
  }

  emitChange() {
    this.emit(this.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this.CHANGE_EVENT, callback);
  }

  get() {
    return this._tweets;
  }

  private _addTweet(tweet) {
    this._tweets.push(tweet);
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
