var React = require('react/addons'),
    Tweet = require('./tweet'),
    socket = require('socket.io-client')('http://localhost:8080');

var TweetList = React.createClass({

  getInitialState: function() {
    return {
      tweets: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    socket.on('tweets-data', function(data) {

      var newState = React.addons.update(_this.state, {
        tweets: {
          $unshift: [{ id: data.id, text: data.text }]
        }
      });

      _this.setState(newState);
    });

    socket.on('connect', function(data) {

      socket.emit('get-tweets-data');

    });

  },

  render: function() {

    var tweets = this.state.tweets.map(function(result) {
      return <Tweet key={result.id} text={result.text} ></Tweet>
    });

    return (
      <div className="tweetList">
          {tweets}
      </div>
    );
  }
});

module.exports = TweetList;
