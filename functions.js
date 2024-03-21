const processFile = (content) => {
  return regexAll(content);
}

const regexAll = (input) => {
  input = input.replace(/(#{1,6})\s?(.+)/g, (match, hashes, text) => {
    const level = hashes.length;
    return `<h${level}>${text.trim()}</h${level}>`;
  });

  input = input.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); // Negrita
  input = input.replace(/__(.+?)__/g, '<strong>$1</strong>'); // Negrita con _
  input = input.replace(/\*(.+?)\*/g, '<em>$1</em>'); // Itálica
  input = input.replace(/_(.+?)_/g, '<em>$1</em>'); // Itálica con _
  input = input.replace(/^(?!<h[1-6]>)([^\n]+)\n/gm, '<p>$1</p>\n');
  // input = input.replace(/<p>(.+?)<\/p>/gs, (match, content) => {
  //   if (/<\/?h[1-6]>/i.test(content)) {
  //     return content;
  //   } else {
  //     return `<p>${content}</p>`;
  //   }
  // });
  return input;
}

module.exports = {
  processFile
};
