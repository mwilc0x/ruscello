/// <reference path='typings/tsd.d.ts' />

import express = require('express');
import http = require('http');
import socketio = require('socket.io');
import request = require('request');
import cheerio = require('cheerio');

var app = express(),
    port = 8080,
    socket: SocketIO.Socket;

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
  var url = 'http://www.nytimes.com/best-sellers-books/';

  request(url, (error, response, html) => {
    if(!error){
      var $ = cheerio.load(html);

      $('div.bColumn div.columnGroup.first div.story').each(function(i, story) {
        if($(this).find('h3 a').attr('href')) {
          scrapeSubPage(
            $(this).find('h3').text(),
            $(this).find('h3 a').attr('href'),
            socket
          );
        }
      });
    }
  });
}

function scrapeSubPage(title, url, socket) {
  var data = [];

  request(url, (error, response, html) => {
    if(!error){
      var $ = cheerio.load(html);
    }

    $('table.bestSellersList tbody tr.bookDetails').each(function() {
      data.push(
        {
          id: Math.floor(100000 + Math.random() * 900000),
          index: $(this).find('td.index').text(),
          summary: $(this).find('td.summary').text().trim()
        }
      );
    });
    socket.emit('book-data', { title: title, data: data });
  });
}
