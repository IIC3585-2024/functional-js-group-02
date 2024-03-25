const blockquoteSymbol = '>';
const startBlockquote = '<blockquote>';
const endBlockquote = '</blockquote>';

const countSymbol = (str, symbol) => {
  let count = 0
  while (str.startsWith(symbol)) {
    count++;
    str = str.substring(1);
  }
  return count;

};

const blockquoteToHtml = (markdown) => {
  const lines = markdown.split('\n');
  let htmlLines = [];
  let inBlockquote = false;
  let indentation = 1;
  lines.forEach(line => {
    const isBlockquote = line.startsWith(blockquoteSymbol);
    if (isBlockquote && !inBlockquote) {
      htmlLines.push(startBlockquote);
      inBlockquote = true;
    }
    if (countSymbol(line, blockquoteSymbol) < indentation && indentation > 1 && isBlockquote) {
      htmlLines.push(endBlockquote);
    }
    if (countSymbol(line, blockquoteSymbol) === indentation + 1 && isBlockquote) {
      htmlLines.push(startBlockquote);
    }
    let takeFromLine = Math.max(countSymbol(line, blockquoteSymbol), 1);

    if (!isBlockquote && inBlockquote) {
      Array(indentation).fill().map(() => { htmlLines.push(endBlockquote) });
      inBlockquote = false;
    }
    htmlLines.push(isBlockquote ? line.substring(takeFromLine) : line);
    indentation = Math.max(countSymbol(line, blockquoteSymbol), 1);
  });
  if (inBlockquote) htmlLines.push(endBlockquote);
  return htmlLines.join('\n');
}

export default blockquoteToHtml;
