/// <reference path='typings/tsd.d.ts' />

import express = require('express');
import http = require('http');
import socketio = require('socket.io');
import request = require('request');
import cheerio = require('cheerio');

class RuscelloServer {

  private _socket: SocketIO.Server;

  constructor() {

    var app = express();
    var port = 8080;

    app.use("/", express.static(__dirname + "/public/"));

    var server = http.createServer(app).listen(port, () => {
      console.log('express server listening on port ' + port);
    });

    var io = socketio.listen(server);

    io.on('connection', (socket) => {
      this._socket = socket;
      
      this._socket.on('get-books-data', () => {
        this.scrapeNYT();
      });
    });

  }

  scrapeNYT() {
    var data = [],
        i = 0,
        url = 'http://www.nytimes.com/best-sellers-books/2014-12-28/combined-print-and-e-book-fiction/list.html#';

    request(url, (error, response, html) => {
      if(!error){
        var $ = cheerio.load(html);

        $('table.bestSellersList tbody').children().each(() => {
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
        this._socket.emit('book-data', data);
      }
    });
  }

}
