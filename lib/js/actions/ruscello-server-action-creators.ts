import { dispatcher as RuscelloDispatcher } from '../dispatcher/ruscello-dispatcher';
import { RuscelloConstants } from '../constants/ruscello-constants';

interface IRuscelloServerActionCreators {
  receiveBooks(books: BookList): void;
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
      list: books
    });
  }

}

export { RuscelloServerActionCreators }
