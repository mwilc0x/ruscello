/// <reference path='../typings/ruscello.d.ts' />

import * as React from 'react';
import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import BestSellerList from './containers/book-bestseller-list.react';
import { fetchBooks } from './actions/actions';
import * as reducers from './reducers/book';
import {devTools, persistState} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
import * as io from 'socket.io-client';

const __DEVTOOLS__ = true;
const composedStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);
const store = composedStore(combineReducers(reducers));

const _socket: SocketIOClient.Emitter = io('http://localhost:8080');
_socket.on('book-data', (books: BookList[]) => {
  store.dispatch(fetchBooks(books));
})
.on('connect', () => {
  _socket.emit('get-books-data');
});

// hook in dev-tools, rock-n-roll
const elements = [
  <Provider store={store} key="provider">
    {() => <BestSellerList />}
  </Provider>
];
if (__DEVTOOLS__) {
  elements.push(
    <DebugPanel top right bottom key="debugPanel">
      <DevTools store={store} monitor={LogMonitor}/>
    </DebugPanel>
  );
}
React.render(<div>{elements}</div>, document.getElementById('bestSellerList'));
