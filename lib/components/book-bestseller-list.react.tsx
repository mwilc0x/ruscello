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

        const { books } = this.props;

        for(var i = 0; i < books.length; i++) {
          var list = books[i].list.map((result: any) => {
            return (
              <li key={result.id}>
                <Book index={result.index}
                      summary={result.summary} />
              </li>);
          });

          lists.push(
            <div className="bestSellerList"
                 key={books[i].title}>
              <h1>{books[i].title}</h1>
              <ul>{list}</ul>
            </div>
          );

          date = books[i].date.curr;
        }

        if(books && Boolean(date)) {
          return (
            <div>
              <h1>{`For week ending:${date}`}</h1>
              {lists}
            </div>
          )
        } else {
          return <h1>Loading...</h1>
        }
    }
}
