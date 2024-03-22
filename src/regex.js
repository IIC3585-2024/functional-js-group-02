const regexMd = {
    "**": /\*\*(.+?)\*\*/g,
    "__": /__(.+?)__/g,
    "*": /\*(.+?)\*/g,
    "_": /_(.+?)_/g,
    "`": /`([^`]+)`/g,
    "#": /(#{1,6})\s?(.+)/g,
    "  ": /  \n/g,
    "\n": /([^\n])(?!\n*<\/?h)\n([^\n])/g
}

export default regexMd;