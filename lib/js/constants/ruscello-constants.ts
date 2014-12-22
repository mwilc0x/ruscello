/// <reference path='../typings/keymirror.d.ts' />

import keyMirror = require('keymirror');

interface IRuscelloConstants {
  ActionTypes(): any;
  PayloadSources(): any;
}

class RuscelloConstants implements IRuscelloConstants {

  private _ActionTypes: any;
  private _PayloadSources: any;

  constructor() {
    this._ActionTypes = keyMirror({
      RECEIVE_RAW_TWEET: null
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
