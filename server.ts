/// <reference path='typings/tsd.d.ts' />

import express = require('express');
import http = require('http');
import socketio = require('socket.io');
import request = require('request');
import cheerio = require('cheerio');

var app = express();
var port = 8080;
var socket: SocketIO.Socket;

app.use("/", express.static(__dirname + "/public/"));

var server = http.createServer(app).listen(port, () => {
  console.log('express server listening on port ' + port);
});

var io = socketio.listen(server);

io.on('connection', (socket) => {
  socket = socket;

  socket.on('get-books-data', () => {
    scrapeNYT(socket);
  });
});

function scrapeNYT(socket: SocketIO.Socket) {
  var data = [];
  var i = 0;
  var url = 'http://www.nytimes.com/best-sellers-books/2015-01-04/combined-print-and-e-book-fiction/list.html';

  request(url, (error, response, html) => {
    if(!error){
      var $ = cheerio.load(html);

      $('table.bestSellersList tbody tr.bookDetails').each(function() {
        data.push(
          {
            id: i,
            index: $(this).find('td.index').text(),
            summary: $(this).find('td.summary').text().trim()
          }
        );

        ++i;
      });
      socket.emit('book-data', data);
    }
  });
}
