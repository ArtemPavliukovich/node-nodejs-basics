import { existsSync, unlink } from 'fs';
import { resolve } from 'path';

const fileName = 'fileToRemove.txt';
const path = resolve('src/fs/files', fileName);

export const remove = async () => {
  if (existsSync(path)) {
    unlink(path, (err) => {
      if (err) throw new Error(err.message);
    });
  } else {
    throw new Error('FS operation failed');
  }
};

remove();