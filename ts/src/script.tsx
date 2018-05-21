/**
 * bootstrap
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root: HTMLElement | null = document.getElementById('root');
if (root) {
  ReactDOM.render(<p>Test</p>, root);
}
