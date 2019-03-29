import { resolve } from 'path';

import { foo, bar, baz } from '../src/index';

test('foo', () => {
  expect(foo(2)).toBe(4);
});

test('bar', () => {
  expect(bar(2)).toBe(8);
});

describe('baz', () => {
  test('ok', async () => {
    expect(
      await baz(resolve(__dirname, 'fixtures', 'lorem.txt')),
    ).toMatchSnapshot();
  });

  test('ng', async () => {
    await expect(
      baz(resolve(__dirname, 'fixtures', 'no_file.txt')),
    ).rejects.toThrow();
  });
});
