const regexMd = {
  '**': /\*\*(.+?)\*\*/g,
  '__': /__(.+?)__/g,
  '*': /\*(.+?)\*/g,
  '_': /_(.+?)_/g,
  '`': /```[\s\S]+?```|`([^`]+)`/g,
  '```': /```([\s\S]*?)```/g,
  '#': /(#{1,6})\s?(.+)/g,
  '  ': / {2}\n/g,
  'link': /(?<!!)\[([^\]]+)\]\(([^)]+)\)/g,
  'img': /!\[([^\]]*)\]\(([^ ]+?)(?: "([^"]*)")?\)/g,
  'num. ': /^\d+\.\s/g,
  'startSpaces': /^\s+/g,
  'largeNum': /^(.*?)\d+\.\s+/g,
};

const regexHtml = {
  'blockStart': /<(pre|ul|ol)>/,
  'blockEnd': /<\/(pre|ul|ol)>/,
  'specialLineStart': /<(li|h[1-6]|blockquote)>/,
  'specialLineEnd': /<\/(li|h[1-6]|blockquote)>/,
  'itemEnd': /<\/li>/,
};

export { regexMd, regexHtml };
