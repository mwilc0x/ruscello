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
    scrapeNYT(socket, 'http://www.nytimes.com/best-sellers-books/');
  });
});

function scrapeNYT(socket: SocketIO.Socket, url: string) {

  request(url, (error, response, html) => {
    if(!error){
      var $ = cheerio.load(html);

      var date = {
        prev: new Date($('#bestsellersPreviousList a span').text()).toDateString(),
        curr: new Date($('.element1 p').text()).toDateString(),
        next: new Date($('#bestsellersNextList a span').text()).toDateString()
      }

      $('div.bColumn div.columnGroup.first div.story').each(function(i, story) {
        if($(this).find('h3 a').attr('href')) {
          scrapeSubPage(
            $(this).find('h3').text(),
            $(this).find('h3 a').attr('href'),
            socket,
            date
          );
        }
      });
    }
  });
}

function scrapeSubPage(title: string, url: string, socket: SocketIO.Socket, date: any) {
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
    socket.emit('book-data', { date: date, title: title, books: data });
  });
}
