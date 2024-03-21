const fs = require('fs');
const { processFile } = require('./functions.js');

async function main(inputFile) {
  try {
    const content = await fs.readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
    const output = processFile(content);
    console.log(output);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

main("page.md");
