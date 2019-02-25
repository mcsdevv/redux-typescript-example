export interface ListItem {
  id: string;
  text: string;
}

export enum actions {
  ADD_ITEM = "List/Add",
  REMOVE_ITEM = "List/Remove"
}

export interface AddItemAction {
  id: string;
  text: string;
  type: actions.ADD_ITEM;
}

export interface RemoveItemAction {
  id: string;
  type: actions.REMOVE_ITEM;
}
