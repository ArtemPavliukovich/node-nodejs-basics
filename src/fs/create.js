import { access, constants, writeFile } from 'fs';
import { resolve } from 'path';

const pathName = resolve('src/fs/files', 'fresh.txt');

export const create = async () => {
  access(pathName, constants.F_OK, (err) => {
    if (err) {
      writeFile(pathName, 'I am fresh and young', (err) => {
        if (err) {
          throw new Error(err.message);
        }
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

create();