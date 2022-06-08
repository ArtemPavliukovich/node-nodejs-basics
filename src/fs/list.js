import { existsSync, readdir } from 'fs';
import { resolve } from 'path';

const path = resolve('src/fs/files');

export const list = async () => {
  if (existsSync(path)) {
    readdir(path, (err, files) => {
      if (err) throw new Error(err.message);
      console.log(files);
    });
  } else {
    throw new Error('FS operation failed');
  }
};

list();