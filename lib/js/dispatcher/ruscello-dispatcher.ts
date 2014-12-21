/// <reference path='../typings/flux.d.ts' />

import RuscelloConstants = require('../constants/ruscello-constants');
import flux = require('flux');

interface IRuscelloDispatcher  {
  handleServerAction(any): void;
  handleViewAction(any): void;
}

class RuscelloDispatcher extends flux.Dispatcher<any> {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction(action) {

    var constants = new RuscelloConstants().PayloadSources();

    var payload = {
      source: constants.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction(action) {

    var constants = new RuscelloConstants().PayloadSources();

    var payload = {
      source: constants.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

}

export = RuscelloDispatcher;
