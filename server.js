var express = require('express'),
  http = require('http'),
  socketio = require('socket.io'),
  Twit = require('twit'),
  app = express(),
  port = 8080;

app.use("/", express.static(__dirname + "/public/"));

var Twit = require('twit')

var T = new Twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_TOKEN_SECRET
})

var server = http.createServer(app).listen(port, function() {
  console.log('express server listening on port ' + port);
});

var io = socketio.listen(server);

io.on('connection', function(socket) {

  console.log('new connection initiated');

  socket.on('get-tweets-data', function() {
    console.log('initiating data');

    var stream = T.stream('statuses/filter', { track: 'taylorswift13' })

    stream.on('tweet', function (tweet) {
      socket.emit('tweets-data', tweet)
    });

  });

})
