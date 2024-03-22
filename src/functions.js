import regexMd from "./regex.js";

const pipe = functions => data => {
  return functions.reduce(
    (value, func) => func(value), data
  );
};

const processFileInPipeline = pipe([
  x => regexAll(x)
]);

const regexAll = (input) => {
  input = input.replace(regexMd["#"], (match, hashes, text) => {
    const level = hashes.length;
    return `<h${level}>${text.trim()}</h${level}>`;
  });
  input = input.replace(regexMd["**"], '<strong>$1</strong>');
  input = input.replace(regexMd["__"], '<strong>$1</strong>');
  input = input.replace(regexMd["*"], '<em>$1</em>');
  input = input.replace(regexMd["_"], '<em>$1</em>');
  input = input.replace(regexMd["`"], '<code>$1</code>');
  input = input.replace(regexMd["  "], '<br>');
  input = input.replace(regexMd["\n"], '$1 $2');
  // input = input.replace(/<p>(.+?)<\/p>/gs, (match, content) => {
  //   if (/<\/?h[1-6]>/i.test(content)) {
  //     return content;
  //   } else {
  //     return `<p>${content}</p>`;
  //   }
  // });
  input = input.replace(/^(?!<h[1-6]>)([^\n]+)\n/gm, '<p>$1</p>\n');
  return input;
}

export default processFileInPipeline;