import * as React from 'react';
import { Book } from './book-bestseller.react';
import { BookStore } from '../stores/book-store';

interface Props {}
interface State { lists: any, date: any }

export class BestSellerList extends React.Component<Props, State> {

    private _bookStore: BookStore;

    constructor(props, context) {
      super(props, context);
      this._bookStore = new BookStore();
      this.state = { lists: [], date: {} }
    }

    getInitialState() {
      return {
        lists: [],
        date: {}
      }
    }

    componentDidMount() {
      this._bookStore.addChangeListener(this._onChange.bind(this));
    }

    render() {
        var lists = [];

        for(var i = 0; i < this.state.lists.length; i++) {
          var books = this.state.lists[i].books.map((result: any) => {
            return React.DOM.li({ key: result.id },
              React.createElement(Book, { index: result.index, summary: result.summary }, null));
          });

          lists.push(
            React.DOM.div({ className: "bestSellerList", key: this.state.lists[i].title },
              React.DOM.h1(null, this.state.lists[i].title),
              React.DOM.ul(null, books))
          );
        }

        if(this.state.date && this.state.date.curr) {
          return React.DOM.div(null,
            React.DOM.h1(null, "For week ending: " + this.state.date.curr),
            lists);
        } else {
          return React.DOM.h1(null, "Loading...");
        }

    }

    private _getStateFromStores() {
      return {
        lists: this._bookStore.getBooks().books,
        date: this._bookStore.getBooks().date
      };
    }

    private _onChange() {
      this.setState(this._getStateFromStores());
    }

}
