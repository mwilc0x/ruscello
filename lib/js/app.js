var React = require('react/addons');
var TweetList = require('./components/tweet-list');

React.render(
  <div>
    <TweetList />
  </div>,
  document.getElementById('tweets')
);
