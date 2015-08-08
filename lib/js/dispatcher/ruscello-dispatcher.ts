import Constants from '../constants/ruscello-constants';
import * as flux from 'flux';

interface IRuscelloDispatcher {
  handleServerAction(action: Book[]): void;
  handleViewAction(action: any): void; // TODO: implement
}

class RuscelloDispatcher extends flux.Dispatcher<any> {

  constructor() {
    super();
  }

  handleServerAction(action) {
    var payload = {
      source: Constants.PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

  handleViewAction(action) {
    var payload = {
      source: Constants.PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

}

var dispatcher = new RuscelloDispatcher()

export { dispatcher }
