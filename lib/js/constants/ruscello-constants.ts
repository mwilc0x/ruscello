import * as keyMirror from 'keymirror';

export default {
    ActionTypes: keyMirror({
      RECEIVE_BOOKS: null
    }),
    PayloadSources: keyMirror({
      SERVER_ACTION: null,
      VIEW_ACTION: null
    })
}
