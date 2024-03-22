import { readFileSync } from 'fs';
import processFile from './parser.js';

async function main(inputFile) {
  try {
    const content = readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
    const output = processFile(content);
    console.log(output);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

main("inputs/page.md");
