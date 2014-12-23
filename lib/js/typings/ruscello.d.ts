interface RuscelloModel {
  tweet: Tweet;
  payloadSources: PayloadSources;
  actionTypes: ActionTypes;
}

interface Tweet { id: string; text: string; }
interface PayloadSources { SERVER_ACTION: string; VIEW_ACTION: string; }
interface ActionTypes { RECEIVE_RAW_TWEET: string; }

declare module 'ruscello.model' {
  var rm: RuscelloModel;
  export = rm;
}
