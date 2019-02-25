import { actions, ListActions, ListStore } from "./types";

const initialState: ListStore = {
  items: []
};

function reducers(state: ListStore = initialState, action: ListActions) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: action.id, text: action.text }]
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter(i => i.id !== action.id)]
      };
    default:
      return state;
  }
}

export default reducers;
