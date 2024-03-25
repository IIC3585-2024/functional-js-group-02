import { regexMd } from '../symbols.js';
import pipe from '../utils.js';

const replaceMdWithRegex = pipe([
  input => input.replace(regexMd['#'], (match, hashes, text) => {
    const level = hashes.length;
    return `<h${level}>${text.trim()}</h${level}>`;
  }),
  input => input.replace(regexMd['**'], '<strong>$1</strong>'),
  input => input.replace(regexMd['__'], '<strong>$1</strong>'),
  input => input.replace(regexMd['*'], '<em>$1</em>'),
  input => input.replace(regexMd['_'], '<em>$1</em>'),
  input => input.replace(regexMd['`'], (match, codeFragment) => codeFragment ? `<code>${codeFragment}</code>` : match),
  input => input.replace(regexMd['```'], '<pre><code>$1</code></pre>'),
  input => input.replace(regexMd['  '], '<br>'),
  input => input.replace(regexMd['link'], '<a href="$2">$1</a>'),
  input => input.replace(regexMd['img'], '<img src="$2" alt="$1" title="$3">'),
]);

export { replaceMdWithRegex };
