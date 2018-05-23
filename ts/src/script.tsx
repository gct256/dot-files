/**
 * bootstrap
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import { CoreState, coreReducer } from './core';

const root: HTMLElement | null = document.getElementById('root');
if (root) {
  const store: Store<CoreState> = createStore(
    coreReducer,
    applyMiddleware(
      createLogger({
        collapsed: true,
        stateTransformer(state: CoreState): object {
          return JSON.parse(JSON.stringify(state));
        }
      })
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <p>Test</p>
    </Provider>,
    root
  );
}
