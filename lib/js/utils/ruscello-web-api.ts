/// <reference path='../typings/socket.io-client.d.ts' />
/// <reference path='../typings/Q.d.ts' />

import io = require('socket.io-client');
import Q = require('q');

export interface IRuscelloWebAPI {
  initData(): Promise;
}

class RuscelloWebAPI implements IRuscelloWebAPI {

  private _socket: Socket;

  constructor() {
    this._socket = io('http://localhost:8080');
  }

  initData: function() {

    var defer = Q.defer();

    _socket.on('tweets-data', (data) => {
      defer.resolve(data);
    });

    _socket.on('connect', () => {
      socket.emit('get-tweets-data');
    });

    return defer.promise;
  }

}

export var RuscelloWebAPI = RuscelloWebAPI;
