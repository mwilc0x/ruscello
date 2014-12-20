import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');

var ActionTypes = RuscelloConstants.ActionTypes;

class RuscelloServerActionCreators {

  receiveTweet: function(tweet) {
    RuscelloDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RAW_TWEET,
      rawTweet: tweet
    });
  }

}

export = RuscelloServerActionCreators;
