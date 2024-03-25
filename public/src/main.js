import { readFileSync } from 'fs';
import processText from './parsers/index.js';

async function main(inputFile) {
  try {
    const content = readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
    const output = processText(content);
    console.log(output);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

main("inputs/page.md");
