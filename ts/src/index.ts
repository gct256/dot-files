import { readFile } from 'fs';

export const foo = (x: number): number => {
  return x * 2;
};

export const bar = (x: number): number => {
  return x * 4;
};

export const baz = async (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
