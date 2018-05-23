/**
 * Core
 */
import { Dispatch, Reducer, combineReducers } from 'redux';
import { ItemsAction, ItemsState, itemsReducer } from './items';

//// action

export type CoreAction = ItemsAction;

//// dispatch

export interface CoreDispatch extends Dispatch<CoreAction> {}

//// state

export interface CoreState {
  items: ItemsState;
}

//// reducer

export const coreReducer: Reducer<CoreState, CoreAction> = combineReducers({
  items: itemsReducer
});
