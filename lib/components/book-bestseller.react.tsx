import * as React from 'react';

interface P { summary: string; index: string; }
interface S {}

export class Book extends React.Component<P, S> {
    render() {
        return <div className="book-bestseller">{ this.props.index + ": " + this.props.summary }</div>;
    }
}
