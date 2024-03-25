import { regexMd } from '../symbols.js';
import { regexHtml } from '../symbols.js';

const startUnorderedList = '<ul>';
const endUnorderedList = '</ul>';
const startOrderedList = '<ol>';
const endOrderedList = '</ol>';
const startListItem = '<li>';
const endListItem = '</li>';
const listMdMarkers = ['- ', '+ ', '* '];
const orderedListStartSymbol = '1. ';
const spaceText = " ";
const blankText = "";

function countLeadingWhitespaceText(str) {
  const match = str.match(regexMd["startSpaces"]);
  return match ? match[0].length : 0;
}

const functionListUnorder = (line) => {
  return listMdMarkers.some(prefix => line.replace(regexMd["startSpaces"], '').startsWith(prefix))
}

const functionListOrder = (line) => {
  return regexMd['num. '].test(line.replace(regexMd["startSpaces"], ''));
} 

const listToHtml = (markdown, functionNeeded) => {
  const lines = markdown.split('\n');
  let htmlLines = [];
  let inList = false;
  let isOrderedList = false;
  let spaceTexts = 0;

  lines.forEach(line => {
    let match = line.replace(regexMd["startSpaces"], '').match(regexMd['num. ']) ? line.replace(regexMd["startSpaces"], '').match(regexMd['num. ']) : false;
    const isList = functionNeeded(line);
    if (isList && !inList) {
      if (match) 
        isOrderedList = match[0] === orderedListStartSymbol;
      else 
        isOrderedList = false;
      inList = true;
      htmlLines.push(isOrderedList ? startOrderedList : startUnorderedList);
    }
    if (countLeadingWhitespaceText(line) !== spaceTexts && spaceTexts > 0 && isList) {
      htmlLines.push(isOrderedList ? endOrderedList : endUnorderedList);
      htmlLines.push(endListItem);
    }

    if (line.substring(0, spaceTexts + 4) === spaceText.repeat(spaceTexts + 4) && isList) {
      htmlLines[htmlLines.length - 1] = htmlLines[htmlLines.length - 1].replace(regexHtml['itemEnd'], '');
      htmlLines.push(isOrderedList ? startOrderedList : startUnorderedList);
    }

    if (inList && !isList) {
      Array(spaceTexts / 4 + 1).fill().map(() => { htmlLines.push(isOrderedList ? endOrderedList : endUnorderedList) });
      inList = false;
    }
    if (isOrderedList)
      htmlLines.push(isList ? startListItem + line.replace(regexMd["startSpaces"], blankText).replace(regexMd['largeNum'], '') + endListItem : line);
    else
      htmlLines.push(isList ? startListItem + line.replace(regexMd["startSpaces"], blankText).substring(2)+ endListItem : line);

    spaceTexts = countLeadingWhitespaceText(line);
  });
  if (inList)
    htmlLines.push(isOrderedList ? endOrderedList : endUnorderedList)
  return htmlLines.join('\n')
}

const orderedListToHtml = (markdown) => {
  return listToHtml(markdown, functionListOrder);
}

const unorderedListToHtml = (markdown) => {
  return listToHtml(markdown, functionListUnorder);
}

export { orderedListToHtml, unorderedListToHtml };
