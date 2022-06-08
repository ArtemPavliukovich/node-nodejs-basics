import { existsSync, mkdir, copyFile, readdir } from 'fs';
import { resolve } from 'path';

const dataFolder = '/files';
const currentFolder = '/files_copy';
const path = resolve('src/fs');

export const copy = async () => {
  if (!existsSync(`${path + currentFolder}`) && existsSync(`${path + dataFolder}`)) {
    mkdir(`${path + currentFolder}`, (err) => {
      if (err) throw new Error(err.message);

      readdir(`${path + dataFolder}`, (err, files) => {
        if (err) throw new Error(err.message);
        
        files.forEach((file) => {
          copyFile(`${path + dataFolder + '/' + file}`, `${path + currentFolder + '/' + file}`, (err) => {
            if (err) throw new Error(err.message);
          });
        });
      });
    });
  } else {
    throw new Error('FS operation failed');
  }
};

copy();