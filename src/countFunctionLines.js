const CommentMap = require('./CommentMap');

function countFunctionLines (path) {
    const length = path.node.loc.end.line - path.node.loc.start.line;
    let comment;
    if (length > 100 && length < 200) {
        comment = `I wouldn't write a ${length} line function but you do you`;
    } else if (length < 500) {
        comment = `${length} lines? Is this a function or a Medium thinkpiece?`;
    } else if (length < 1000) {
        comment = `How is this possibly all one function?`;
    } else {
        comment = '${length} lines? Who are you, David Foster Wallace?'
    }
    comment && CommentMap.addComment(path, comment);
}

module.exports = countFunctionLines;
