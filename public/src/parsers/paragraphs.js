import { regexHtml } from '../symbols.js';

const addParagraphsTags = (markdown) => {
  const lines = markdown.split('\n');
  let htmlLines = [];
  let inBlock = false;
  
  lines.forEach(line => {
    const isBlockStart = line.match(regexHtml['blockStart']);
    const isBlockEnd = line.match(regexHtml['blockEnd']);
    const isSpecialLineStart = line.match(regexHtml['specialLineStart']);
    const isSpecialLineEnd = line.match(regexHtml['specialLineEnd']);
    const isEmptyLine = line.trim() === '';

    const paragraphIsNotNeeded =
      isBlockStart ||
      isBlockEnd ||
      isEmptyLine ||
      isSpecialLineStart ||
      isSpecialLineEnd ||
      inBlock;

    if (paragraphIsNotNeeded) {
      if (isBlockStart) inBlock = true;
      if (isBlockEnd) inBlock = false;
      htmlLines.push(line);
    } else {
      htmlLines.push(`<p>${line}</p>`)
    }
  })
  return htmlLines.join('\n');
}

export { addParagraphsTags };
