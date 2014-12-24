import RuscelloDispatcher = require('../dispatcher/ruscello-dispatcher');
import RuscelloConstants = require('../constants/ruscello-constants');

interface IRuscelloServerActionCreators {
  receiveBooks(books: Book[]): void;
}

class RuscelloServerActionCreators implements IRuscelloServerActionCreators {

  private _dispatcher: typeof RuscelloDispatcher;
  private _ActionTypes: ActionTypes;

  constructor() {
    this._ActionTypes = new RuscelloConstants().ActionTypes();
    this._dispatcher = RuscelloDispatcher;
  }

  receiveBooks(books) {
    this._dispatcher.handleServerAction({
      type: this._ActionTypes.RECEIVE_BOOKS,
      books: books
    });
  }

}

export = RuscelloServerActionCreators;
