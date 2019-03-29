import { AnyAction, Dispatch, Store, combineReducers } from 'redux';

import { ItemsState, ItemsAction, itemsReducer } from './items';

// ---- state

export interface AppState {
  items: ItemsState;
}

// ---- action

export type AppAction = ItemsAction | AnyAction;

// ---- dispatch

export interface AppDispatch extends Dispatch<AppAction> {}

// ---- reducer

export const appReducer = combineReducers({
  items: itemsReducer,
});

// ---- store

export interface AppStore extends Store<AppState, AppAction> {}
