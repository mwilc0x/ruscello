import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');

interface IRuscelloServerActionCreators {
  receiveTweet(any): void;
}

class RuscelloServerActionCreators implements IRuscelloServerActionCreators {

  receiveTweet(tweet) {

    var ActionTypes = new RuscelloConstants().ActionTypes();
    var dispatcher = new RuscelloDispatcher();

    dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RAW_TWEET,
      rawTweet: tweet
    });
  }

}

export = RuscelloServerActionCreators;
