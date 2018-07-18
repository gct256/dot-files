import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';
import './style.scss';

function main(root: HTMLElement | null): void {
  if (root === null) {
    return;
  }

  ReactDOM.render(<App />, root);
}

main(document.getElementById('root'));
