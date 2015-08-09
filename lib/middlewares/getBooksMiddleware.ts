import * as io from 'socket.io-client';

export default function fetchBooksMiddleware() {
  return next => action => {
    const _socket = io('http://localhost:8080');

    _socket.on('book-data', (books) => {
      console.log('BOOM')
      return next(action(books));
    });

    _socket.on('connect', () => {
      _socket.emit('get-books-data');
    });
  }
}
