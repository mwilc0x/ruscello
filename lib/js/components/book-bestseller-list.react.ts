import React = require('react');
import TypedReact = require("typed-react");
import component = require('./book-bestseller.react');
import BookStore = require('../stores/book-store');

interface BestSellerListIProps {}
interface BestSellerListIState { lists: { title: string; books: Book[]; }[]; }

class BestSellerListClass extends TypedReact.Component<BestSellerListIProps, BestSellerListIState> {

    private _bookStore: BookStore;

    constructor() {
      super();
      this._bookStore = new BookStore();
    }

    getInitialState() {
      return {
        lists: []
      }
    }

    componentDidMount() {
      this._bookStore.addChangeListener(this._onChange);
    }

    render() {
        var lists = [];

        for(var i = 0; i < this.state.lists.length; i++) {
          var books = this.state.lists[i].books.map((result) => {
            return React.DOM.li({ key: result.id },
              React.createElement(component.Book, { index: result.index, summary: result.summary }, null));
          });

          lists.push(
            React.DOM.div({ className: "bestSellerList", key: this.state.lists[i].title },
              React.DOM.h1(null, this.state.lists[i].title),
              React.DOM.ul(null, books))
          );
        }

        return React.DOM.div(null, lists);
    }

    private _getStateFromStores() {
      return {
        lists: this._bookStore.getBooks()
      };
    }

    private _onChange() {
      this.setState(this._getStateFromStores());
    }

}

export var BestSellerList = TypedReact.createClass(BestSellerListClass);
