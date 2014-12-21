import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');

var ActionTypes = RuscelloConstants.ActionTypes;

export interface IRuscelloServerActionCreators {
  receiveTweet(any): void;
}

class RuscelloServerActionCreators implements IRuscelloServerActionCreators {

  receiveTweet(tweet) {
    RuscelloDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RAW_TWEET,
      rawTweet: tweet
    });
  }

}

export = RuscelloServerActionCreators;
