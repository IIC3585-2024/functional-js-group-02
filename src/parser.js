import regexMd from './regex.js';
import pipe from './utils.js';

const processFile = pipe([
  input => blockquoteToHtml(input),
  input => regexAll(input)
]);

const regexAll = pipe([
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
  input => input.replace(regexMd['\n'], '$1 $2'),
  input => input.replace(regexMd['link'], '<a href="$2">$1</a>'),
  input => input.replace(regexMd['img'], '<img src="$2" alt="$1" title="$3">'),
  // input => input.replace(regexMd['p'], '<p>$1</p>\n'),
]);

function blockquoteToHtml(markdown) {
  const lines = markdown.split('\n');
  let htmlLines = [];
  let inBlockquote = false;

  lines.forEach(line => {
    const isBlockquote = line.startsWith('>');
    if (isBlockquote && !inBlockquote) {
        htmlLines.push('<blockquote>');
        inBlockquote = true;
    } else if (!isBlockquote && inBlockquote) {
        htmlLines.push('</blockquote>');
        inBlockquote = false;
    }
    htmlLines.push(isBlockquote ? line.substring(1) : line);
  });
  if (inBlockquote) htmlLines.push('</blockquote>');
  return htmlLines.join('\n');
}

export default processFile;
