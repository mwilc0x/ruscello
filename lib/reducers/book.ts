interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
  return;
};

const initialState = <Store>{ books: [] }

export function book(state: Store = initialState, action: any) {
  switch(action.type) {
    case 'RECEIVE_BOOKS':
      return Object.assign({}, state, {
        books: [
          ...state.books,
          {
            title: action.list.title,
            list: action.list.books,
            date: action.list.date
          }
        ]
      });
    default:
      return state;
  }
}
