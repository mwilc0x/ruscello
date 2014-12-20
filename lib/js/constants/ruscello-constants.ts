var keyMirror = require('keymirror');

class RuscelloConstants {

  public ActionTypes: keyMirror({
    RECEIVE_RAW_TWEET: null
  }),

  public PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

}

export = RuscelloConstants;
