/// <reference path='book-bestseller.react.ts' />
/// <reference path='../typings/react.d.ts' />
/// <reference path='../typings/socket.io-client.d.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");
import component = require('./book-bestseller.react');
import BookStore = require('../stores/book-store');

interface BestSellerListIProps {}
interface BestSellerListIState { books: Book[]; }

class BestSellerListClass extends TypedReact.Component<BestSellerListIProps, BestSellerListIState> {

    private _bookStore: BookStore;

    constructor() {
      super();
      this._bookStore = new BookStore();
    }

    getInitialState() {
      return {
        books: []
      }
    }

    componentDidMount() {
      this._bookStore.addChangeListener(this._onChange);
    }

    render() {
        var books = this.state.books.map((result) => {
          return React.createElement(component.Book, { key: result.id, index: result.index, summary: result.summary }, null);
        });

        return React.DOM.div({ className: "bestSellerList" }, books);
    }

    private _getStateFromStores() {
      return {
        books: this._bookStore.getBooks()
      };
    }

    private _onChange() {
      this.setState(this._getStateFromStores());
    }

}

export var BestSellerList = TypedReact.createClass(BestSellerListClass);
