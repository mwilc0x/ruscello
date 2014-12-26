import RuscelloConstants = require('../constants/ruscello-constants');
import flux = require('flux');

interface IRuscelloDispatcher {
  handleServerAction(action: Book[]): void;
  handleViewAction(action: any): void; // TODO: implement
}

class RuscelloDispatcher extends flux.Dispatcher<any> {

  private _constants: PayloadSources;

  constructor() {
    super();
    this._constants = new RuscelloConstants().PayloadSources();
  }

  handleServerAction(action) {
    var payload = {
      source: this._constants.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

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
