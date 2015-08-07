import * as React from 'react';

interface Props { summary: string; index: string; }
interface State {}

export class Book extends React.Component<Props, State> {
    render() {
        return React.DOM.div({ className: "book-bestseller" }, this.props.index + ": " + this.props.summary);
    }
}
