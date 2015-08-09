import * as React from 'react';

interface P { summary: string; index: string; }
interface S {}

export class Book extends React.Component<P, S> {
    render() {
        const { index, summary } = this.props;
        return <div className="book-bestseller">{`${index}:${summary}`}</div>;
    }
}
