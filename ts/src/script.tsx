import * as React from 'react';
import * as ReactDOM from 'react-dom';

const main = (root: HTMLElement | null): void => {
  if (root === null) return;

  ReactDOM.render(<hr />, root);
};

main(document.getElementById('root'));
