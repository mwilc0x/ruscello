var express = require('express'),
  http = require('http'),
  socketio = require('socket.io'),
  app = express(),
  port = 8080,
  request = require('request'),
  cheerio = require('cheerio');

app.use("/", express.static(__dirname + "/public/"));

var server = http.createServer(app).listen(port, function() {
  console.log('express server listening on port ' + port);
});

var io = socketio.listen(server);

io.on('connection', function(socket) {
  socket.on('get-books-data', function() {
    scrapeNYT(socket);
  });
});

/**
* Scrape latest NYT Best Sellers List
*/
function scrapeNYT(socket) {
  var data = [],
      i = 0,
      url = 'http://www.nytimes.com/best-sellers-books/2014-12-28/combined-print-and-e-book-fiction/list.html#';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      $('table.bestSellersList tbody').children().each(function(){
        if($(this).hasClass('bookDetails')) {

          data.push(
            {
              id: i,
              index: $(this).find('td.index').text(),
              summary: $(this).find('td.summary').text().trim()
            }
          );

          ++i;
        }
      });
      socket.emit('book-data', data);
    }
  });
}
