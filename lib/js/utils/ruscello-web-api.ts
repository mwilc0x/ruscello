/// <reference path='../typings/socket.io-client.d.ts' />
/// <reference path='../typings/Q.d.ts' />

import io = require('socket.io-client');
import actions = require('../actions/ruscello-server-action-creators')

export interface IRuscelloWebAPI {
  initData(): void;
}

class RuscelloWebAPI implements IRuscelloWebAPI {

  private _socket: Socket;

  constructor() {
    this._socket = io('http://localhost:8080');
  }

  initData: function() {

    this._socket.on('tweets-data', (data) => {
      actions.receiveTweet(data);
    });

    this._socket.on('connect', () => {
      this._socket.emit('get-tweets-data');
    });
  }

}

export = RuscelloWebAPI;
