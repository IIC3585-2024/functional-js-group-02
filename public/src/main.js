import { readFileSync, writeFileSync } from 'fs';
import processText from './parsers/index.js';

async function main(inputFile) {
  try {
    const content = readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
    const output = processText(content);
    writeFileSync('./outputs/page.html', output);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

// Coloca el archivo que deseas procesar
main('./inputs/page.md');
