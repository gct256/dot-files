import * as React from 'react';
import * as ReactDOM from 'react-dom';

function main(root) {
  if (root === null) {
    return;
  }

  ReactDOM.render(<p>Test</p>, root);
}

main(document.getElementById('root'));
