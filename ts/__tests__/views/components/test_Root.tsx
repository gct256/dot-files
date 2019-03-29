import * as React from 'react';
import { create } from 'react-test-renderer';

import { Root } from '../../../src/views/components/Root';

test('render without props', () => {
  expect(create(<Root />).toJSON()).toMatchSnapshot();
});

test('render with props', () => {
  expect(create(<Root title="foo" />).toJSON()).toMatchSnapshot();
});
