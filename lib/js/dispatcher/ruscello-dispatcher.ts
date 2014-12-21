/// <reference path='../typings/flux.d.ts' />

import RuscelloConstants = require('../constants/ruscello-constants');
import flux = require('flux');

export interface IRuscelloDispatcher extends flux.Dispatcher<any> {
  handleServerAction(any): void;
  handleViewAction(any): void;
}

class RuscelloDispatcher implements IRuscelloDispatcher {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction(action) {
    var payload = {
      source: RuscelloConstants.PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction(action) {
    var payload = {
      source: RuscelloConstants.PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

}

export = RuscelloDispatcher;
