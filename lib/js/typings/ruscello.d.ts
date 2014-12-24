interface RuscelloModel {
  book: Book;
  payloadSources: PayloadSources;
  actionTypes: ActionTypes;
}

interface Book { id: string; index: string; summary: string; }
interface PayloadSources { SERVER_ACTION: string; VIEW_ACTION: string; }
interface ActionTypes { RECEIVE_BOOKS: string; }

declare module 'ruscello.model' {
  var rm: RuscelloModel;
  export = rm;
}
