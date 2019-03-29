import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root } from './views/components/Root';

/**
 * 処理開始
 *
 * @param root root要素
 */
function main(root: HTMLElement | null): void {
  if (root === null) {
    return;
  }

  ReactDOM.render(<Root />, root);
}

main(document.getElementById('root'));
