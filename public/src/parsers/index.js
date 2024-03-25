import pipe from '../utils.js';
import blockquoteToHtml from './blockquotes.js';
import { orderedListToHtml, unorderedListToHtml } from './lists.js';
import { replaceMdWithRegex } from './regex.js';
import { addParagraphsTags } from './paragraphs.js';

const processText = pipe([
  input => blockquoteToHtml(input),
  input => orderedListToHtml(input),
  input => unorderedListToHtml(input),
  input => replaceMdWithRegex(input),
  input => addParagraphsTags(input),
]);

export default processText;
