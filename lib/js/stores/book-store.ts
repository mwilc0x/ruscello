import { EventEmitter2 as EventEmitter } from 'eventemitter2';
import { dispatcher as RuscelloDispatcher } from '../dispatcher/ruscello-dispatcher';
import { RuscelloConstants } from '../constants/ruscello-constants';
import { RuscelloWebAPI as RuscelloUtils } from '../utils/ruscello-web-api';

class BookStore extends EventEmitter {

  private _dispatcher: typeof RuscelloDispatcher;
  private _actionTypes: ActionTypes;
  private _CHANGE_EVENT: string;
  private _bookList: BookListMap;
  private _date: ListDates;

  constructor() {
    super();
    this._dispatcher = RuscelloDispatcher;
    this._actionTypes = new RuscelloConstants().ActionTypes();
    this._CHANGE_EVENT = 'change';
    this._bookList = {};
    this._dispatcher.register(this._dispatchToken.bind(this));
  }

  addChangeListener(callback) {
    this.on(this._CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this._CHANGE_EVENT, callback);
  }

  getBooks() {
    return { books: this._bookList[this._date.curr].books, date: this._date };
  }

  private _emitChange() {
    this.emit(this._CHANGE_EVENT);
  }

  private _setDate(date) {
    this._date = date;
  }

  private _addBooks(data) {
    var curr = data.list.date.curr;
    if(!this._bookList[curr]) {
      this._bookList[curr] = {
        books: []
      }
    } else {
      this._bookList[curr].books.push(data.list);
    }
  }

  private _dispatchToken(payload: any) {
    var action = payload.action;

    switch(action.type) {

      case this._actionTypes.RECEIVE_BOOKS:
        this._setDate(action.list.date)
        this._addBooks(action);
        this._emitChange();
        break;

      default:
        // do nothing
    }
  }

}

export { BookStore }
