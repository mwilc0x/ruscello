import { dispatcher as RuscelloDispatcher } from '../dispatcher/ruscello-dispatcher';
import Constants from '../constants/ruscello-constants';

interface IRuscelloServerActionCreators {
  receiveBooks(books: BookList): void;
}

class RuscelloServerActionCreators implements IRuscelloServerActionCreators {

  private _dispatcher: typeof RuscelloDispatcher;

  constructor() {
    this._dispatcher = RuscelloDispatcher;
  }

  receiveBooks(books) {
    this._dispatcher.handleServerAction({
      type: Constants.ActionTypes.RECEIVE_BOOKS,
      list: books
    });
  }

}

export { RuscelloServerActionCreators }
