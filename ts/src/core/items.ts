/**
 * Items
 */
import { List, Record } from 'immutable';
import { Action } from 'redux';

//// action type

const CREATE_ITEM: 'CREATE_ITEM' = 'CREATE_ITEM';
const DELETE_ITEM: 'DELETE_ITEM' = 'DELETE_ITEM';

//// action

interface CreateItemAction extends Action<typeof CREATE_ITEM> {
  payload: {
    arg0: string;
  };
}

interface DeleteItemAction extends Action<typeof DELETE_ITEM> {
  payload: {
    arg0: string;
  };
}

export type ItemsAction = CreateItemAction | DeleteItemAction;

//// action creator

export function createItem(arg0: string): CreateItemAction {
  return {
    type: CREATE_ITEM,
    payload: { arg0 }
  };
}

export function deleteItem(arg0: string): DeleteItemAction {
  return {
    type: DELETE_ITEM,
    payload: { arg0 }
  };
}

//// data class

export class Item extends Record({ arg0: '' }) {}

//// state

export interface ItemsState extends List<Item> {}

//// reducer

export function itemsReducer(
  state: ItemsState = List(),
  action: ItemsAction
): ItemsState {
  switch (action.type) {
    case CREATE_ITEM: {
      return state;
    }

    case DELETE_ITEM: {
      return state;
    }

    default:
      return state;
  }
}
