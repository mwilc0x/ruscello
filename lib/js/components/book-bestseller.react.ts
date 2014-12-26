import React = require('react');
import TypedReact = require("typed-react");

interface BookIProps { summary: string; index: string; }
interface BookIState {}

class BookClass extends TypedReact.Component<BookIProps, BookIState> {
    render() {
        return React.DOM.div({ className: "book-bestseller" }, this.props.index + ": " + this.props.summary);
    }
}

export var Book = TypedReact.createClass(BookClass);
