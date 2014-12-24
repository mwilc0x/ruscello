/// <reference path='../typings/keymirror.d.ts' />

import keyMirror = require('keymirror');

interface IRuscelloConstants {
  ActionTypes(): ActionTypes;
  PayloadSources(): PayloadSources;
}

class RuscelloConstants implements IRuscelloConstants {

  private _ActionTypes: ActionTypes;
  private _PayloadSources: PayloadSources;

  constructor() {
    this._ActionTypes = keyMirror({
      RECEIVE_BOOKS: null
    });

    this._PayloadSources = keyMirror({
      SERVER_ACTION: null,
      VIEW_ACTION: null
    });
  }

  ActionTypes() {
    return this._ActionTypes;
  }

  PayloadSources() {
    return this._PayloadSources;
  }

}

export = RuscelloConstants;
