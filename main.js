const fs = require('fs');

async function main(inputFile) {
  try {
    const content = await fs.readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
    // procesar
    // crear archivo de salida
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

main();