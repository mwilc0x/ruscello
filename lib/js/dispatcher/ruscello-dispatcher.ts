/// <reference path='../typings/flux.d.ts' />

import RuscelloConstants = require('../constants/ruscello-constants');
import flux = require('flux');

class RuscelloDispatcher extends flux.Dispatcher<any> {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction: function(action) {
    var payload = {
      source: RuscelloConstants.PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction: function(action) {
    var payload = {
      source: RuscelloConstants.PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

export = RuscelloDispatcher;
