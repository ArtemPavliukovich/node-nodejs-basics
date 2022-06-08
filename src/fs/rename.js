import { rename as fsRename, existsSync } from 'fs';
import { resolve } from 'path';

const fileName = '/wrongFilename.txt';
const newFileName = '/properFilename.md';
const path = resolve('src/fs/files');

export const rename = async () => {
  if (existsSync(`${path + fileName}`)) {
    fsRename(`${path + fileName}`, `${path + newFileName}`, (err) => {
      if (err) throw new Error(err.message);
    });
  } else {
    throw new Error('FS operation failed');
  }
};

rename();