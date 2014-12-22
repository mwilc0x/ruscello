import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');

interface IRuscelloServerActionCreators {
  receiveTweet(any): void;
}

class RuscelloServerActionCreators implements IRuscelloServerActionCreators {

  private _dispatcher: any;
  private _ActionTypes: any;

  constructor() {
    this._ActionTypes = new RuscelloConstants().ActionTypes();
    this._dispatcher = RuscelloDispatcher;
  }

  receiveTweet(tweet) {
    this._dispatcher.handleServerAction({
      type: this._ActionTypes.RECEIVE_RAW_TWEET,
      rawTweet: tweet
    });
  }

}

export = RuscelloServerActionCreators;
