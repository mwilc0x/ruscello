import React = require('react');
import TypedReact = require("typed-react");
import component = require('./book-bestseller.react');
import BookStore = require('../stores/book-store');

interface BestSellerListIProps {}
interface BestSellerListIState { books: { title: string; data: Book[]; }[]; }

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
        var lists = [];

        for(var i = 0; i < this.state.books.length; i++) {
          var books = this.state.books[i].data.map((result) => {
            return React.DOM.li(null,
              React.createElement(component.Book, { key: result.id, index: result.index, summary: result.summary }, null));
          });

          lists.push(
            React.DOM.div({ className: "bestSellerList" },
              React.DOM.h1(null, this.state.books[i].title),
              React.DOM.ul(null, books))
          );
        }

        return React.DOM.div(null, lists);
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
