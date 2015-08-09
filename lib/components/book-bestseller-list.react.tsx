import * as React from 'react';
import { Book } from './book-bestseller.react';

interface P {
  books: BookList[];
}
interface S { }

export class BestSellerList extends React.Component<P, S> {

    constructor(props) {
      super(props);
      this.props = props;
    }

    render() {
        var lists = [],
            date = '';

        for(var i = 0; i < this.props.books.length; i++) {
          var books = this.props.books[i].list.map((result: any) => {
            return (
              <li key={result.id}>
                <Book index={result.index}
                      summary={result.summary} />
              </li>);
          });

          lists.push(
            <div className="bestSellerList"
                 key={this.props.books[i].title}>
              <h1>{this.props.books[i].title}</h1>
              <ul>{books}</ul>
            </div>
          );

          date = this.props.books[i].date.curr;
        }

        if(this.props && this.props.books && date !== '') {
          return (
            <div>
              <h1>{"For week ending: " + date}</h1>
              {lists}
            </div>
          )
        } else {
          return <h1>Loading...</h1>
        }
    }
}
