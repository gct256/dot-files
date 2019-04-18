import { AnyAction, Dispatch, Store, combineReducers } from 'redux';

import { ExamplesState, ExamplesAction, examplesReducer } from './examples';

// ==== state

export interface AppState {
  examples: ExamplesState;
}

// ==== action

export type AppAction = ExamplesAction | AnyAction;

// ==== dispatch

export interface AppDispatch extends Dispatch<AppAction> {}

// ==== reducer

export const appReducer = combineReducers({
  examples: examplesReducer,
});

// ==== store

export interface AppStore extends Store<AppState, AppAction> {}
