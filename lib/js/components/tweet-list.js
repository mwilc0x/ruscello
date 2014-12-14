var React = require('react'),
    Tweet = require('./tweet'),
    socket = require('socket.io-client')('http://localhost:8080');

var TweetList = React.createClass({

  componentDidMount: function() {

    socket.on('connect', function(data) {

      socket.on('tweets-data', function(data) {
        
      });

    });

  },

  render: function() {
    return (
      <div className="tweetList">
        Hello, world! I am a TweetList.
        <Tweet />
      </div>
    );
  }
});

module.exports = TweetList;
