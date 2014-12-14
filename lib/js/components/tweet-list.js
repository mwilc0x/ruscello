var React = require('react'),
    Tweet = require('./tweet'),
    socket = require('socket.io-client')('http://localhost:8080');

var TweetList = React.createClass({

  componentDidMount: function() {


    socket.on('tweets-data', function(data) {
      console.log('received data from server', data);
    });

    socket.on('connect', function(data) {

      socket.emit('get-tweets-data');

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
