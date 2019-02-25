import { actions, AddItemAction, RemoveItemAction } from "./types";

export const addItem = (id: string, text: string): AddItemAction => ({
  id,
  text,
  type: actions.ADD_ITEM
});

export const removeItem = (id: string): RemoveItemAction => ({
  id,
  type: actions.REMOVE_ITEM
});
