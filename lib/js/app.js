var React = require('react');
var TweetList = require('./components/tweet-list');

React.render(
  <div>
    <TweetList />
  </div>,
  document.getElementById('tweets')
);
