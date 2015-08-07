import * as io from 'socket.io-client';
import { RuscelloServerActionCreators as Actions } from '../actions/ruscello-server-action-creators';

interface IRuscelloWebAPI {
  initData(): void;
}

class RuscelloWebAPI implements IRuscelloWebAPI {

  private _socket: SocketIOClient.Socket;
  private _actions: Actions;

  constructor() {
    this._socket = io('http://localhost:8080');
    this._actions = new Actions();
  }

  initData() {
    this._socket.on('book-data', (data) => {
      this._actions.receiveBooks(data);
    });

    this._socket.on('connect', () => {
      this._socket.emit('get-books-data');
    });
  }

}

export { RuscelloWebAPI }
