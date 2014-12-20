/// <reference path='../typings/socket.io-client.d.ts' />
/// <reference path='../typings/Q.d.ts' />

import io = require('socket.io-client');
import q = require('q');

export interface IRuscelloWebAPI {
  initData(): Promise<any>;
}

class RuscelloWebAPI implements IRuscelloWebAPI {

  private _socket: Socket;

  constructor() {
    this._socket = io('http://localhost:8080');
  }

  initData: function() {

    var defer = q.defer();

    this._socket.on('tweets-data', (data) => {
      defer.resolve(data);
    });

    this._socket.on('connect', () => {
      this._socket.emit('get-tweets-data');
    });

    return defer.promise;
  }

}

export var RuscelloWebAPI = RuscelloWebAPI;
