import { readFile } from 'fs';

export function foo(x: number): number {
  return x * 2;
}

export function bar(x: number): number {
  return x * 4;
}

export async function baz(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
