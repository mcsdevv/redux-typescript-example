export interface ListStore {
  items: Item[];
}

export interface Item {
  id: string;
  text: string;
}

export enum actions {
  ADD_ITEM = "List/AddItem",
  REMOVE_ITEM = "List/RemoveItem"
}

export type ListActions = AddItemAction | RemoveItemAction;

export interface AddItemAction {
  id: string;
  text: string;
  type: actions.ADD_ITEM;
}

export interface RemoveItemAction {
  id: string;
  type: actions.REMOVE_ITEM;
}
