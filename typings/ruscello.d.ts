/// <reference path='keymirror.d.ts' />
/// <reference path='tsd.d.ts' />

interface RuscelloModel {
  book: Book;
  payloadSources: PayloadSources;
  actionTypes: ActionTypes;
  listDates: ListDates;
}

interface BookList { date?: string; title: string; books: Book[]; }
interface BookListMap { [index: string]: { books: BookList[]; } }
interface Book { id: string; index: string; title: string; summary: string; }
interface PayloadSources { SERVER_ACTION: string; VIEW_ACTION: string; }
interface ActionTypes { RECEIVE_BOOKS: string; }
interface ListDates { prev: string; curr: string; next: string; }

declare module 'ruscello.model' {
  var rm: RuscelloModel;
  export = rm;
}
