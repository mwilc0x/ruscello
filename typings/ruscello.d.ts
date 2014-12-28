/// <reference path='../lib/js/components/book-bestseller.react.ts' />
/// <reference path='../lib/js/components/book-bestseller-list.react.ts' />
/// <reference path='../node_modules/typed-react/dist/typed-react.d.ts' />
/// <reference path='keymirror.d.ts' />
/// <reference path='tsd.d.ts' />

interface RuscelloModel {
  book: Book;
  payloadSources: PayloadSources;
  actionTypes: ActionTypes;
}

interface Book { id: string; index: string; title: string; summary: string; }
interface PayloadSources { SERVER_ACTION: string; VIEW_ACTION: string; }
interface ActionTypes { RECEIVE_BOOKS: string; }

declare module 'ruscello.model' {
  var rm: RuscelloModel;
  export = rm;
}
