import { access, constants, writeFile } from 'fs';

const fileName = 'fresh.txt';
const pathName = `./files/${fileName}`;

export const create = async () => {
  access(pathName, constants.F_OK, (err) => {
      console.log(err);
    if (err) {
      writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
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