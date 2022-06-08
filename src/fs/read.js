import { existsSync, readFile } from 'fs';
import { resolve } from 'path';

const fileName = 'fileToRead.txt';
const path = resolve('src/fs/files', fileName);

export const read = async () => {
  if (existsSync(path)) {
    readFile(path, 'utf8', (err, data) => {
      if (err) throw new Error(err.message);
      console.log(data);
    });
  } else {
    throw new Error('FS operation failed');
  }
};

read();