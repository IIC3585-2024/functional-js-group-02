const regexMd = {
    '**': /\*\*(.+?)\*\*/g,
    '__': /__(.+?)__/g,
    '*': /\*(.+?)\*/g,
    '_': /_(.+?)_/g,
    '`': /```[\s\S]+?```|`([^`]+)`/g,
    '```': /```([\s\S]*?)```/g,
    '#': /(#{1,6})\s?(.+)/g,
    '  ': /  \n/g,
    '\n': /([^\n])(?!\n*<\/?h)\n([^\n])/g,
    'link': /(?<!\!)\[([^\]]+)\]\(([^\)]+)\)/g,
    'img': /!\[([^\]]*)\]\(([^ ]+?)(?: "([^"]*)")?\)/g,
    'p': /^(?!<h[1-6]>|<pre>)([^\n]+?)(?<!<\/pre>)\n/gm,
}

export default regexMd;