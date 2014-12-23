/// <reference path='../typings/flux.d.ts' />

import RuscelloConstants = require('../constants/ruscello-constants');
import flux = require('flux');

interface IRuscelloDispatcher {
  handleServerAction(action: Tweet): void;
  handleViewAction(action: any): void; // TODO: implement
}

class RuscelloDispatcher extends flux.Dispatcher<any> {

  private _constants: PayloadSources;

  constructor() {
    super();
    this._constants = new RuscelloConstants().PayloadSources();
  }

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction(action) {
    var payload = {
      source: this._constants.SERVER_ACTION,
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
      source: this._constants.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

}

var dispatcher = new RuscelloDispatcher()

export = dispatcher;
