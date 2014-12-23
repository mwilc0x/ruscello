import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');

interface IRuscelloServerActionCreators {
  receiveTweet(tweet: Tweet): void;
}

class RuscelloServerActionCreators implements IRuscelloServerActionCreators {

  private _dispatcher: typeof RuscelloDispatcher;
  private _ActionTypes: ActionTypes;

  constructor() {
    this._ActionTypes = new RuscelloConstants().ActionTypes();
    this._dispatcher = RuscelloDispatcher;
  }

  receiveTweet(tweet) {
    this._dispatcher.handleServerAction({
      type: this._ActionTypes.RECEIVE_RAW_TWEET,
      tweet: tweet
    });
  }

}

export = RuscelloServerActionCreators;
