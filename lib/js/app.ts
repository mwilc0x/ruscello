/// <reference path='../../typings/ruscello.d.ts' />

import * as React from 'react';
import { EventEmitter2 } from 'eventemitter2';
import { BestSellerList } from './components/book-bestseller-list.react';
import { RuscelloWebAPI } from './utils/ruscello-web-api';

interface P {}

window.onload = function () {
  var webAPI = new RuscelloWebAPI()

  webAPI.initData();
  React.render(
    React.createElement(<React.ComponentClass<any>>BestSellerList),
    document.getElementById("bestSellerList")
  );
};
