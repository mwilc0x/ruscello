var React = require('react');

var Tweet = React.createClass({
  render: function() {
    return (
      <div className="tweet">
        {this.props.text}
      </div>
    );
  }
});

module.exports = Tweet;
