import regexMd from "./regex.js";
import pipe from "./utils.js";

const processFile = pipe([
  x => regexAll(x)
]);

const regexAll = pipe([
  input => input.replace(regexMd["#"], (match, hashes, text) => {
    const level = hashes.length;
    return `<h${level}>${text.trim()}</h${level}>`;
  }),
  input => input.replace(regexMd["**"], '<strong>$1</strong>'),
  input => input.replace(regexMd["__"], '<strong>$1</strong>'),
  input => input.replace(regexMd["*"], '<em>$1</em>'),
  input => input.replace(regexMd["_"], '<em>$1</em>'),
  input => input.replace(regexMd["`"], '<code>$1</code>'),
  input => input.replace(regexMd["  "], '<br>'),
  input => input.replace(regexMd["\n"], '$1 $2'),
  input => input.replace(regexMd["blockquote"], '<blockquote>$1</blockquote>'),
  // input => input.replace(/((?:^ {4}.*\n?)+)/gm, (match) => {
  //   const codeBlock = match.replace(/^ {4}/gm, '');
  //   return `<pre><code>${codeBlock}</code></pre>`;
  // }),
  input => input.replace(regexMd["p"], '<p>$1</p>\n')
]);

export default processFile;
