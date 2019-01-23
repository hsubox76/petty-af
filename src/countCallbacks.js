const CommentMap = require('./CommentMap');

function getCallbackDepth(path) {
    let parentPath = path.parentPath;
    let expressionCount = 0;
    while (parentPath && parentPath.node.type !== 'Program') {
        if (parentPath.node.type === 'CallExpression') {
            expressionCount++;
        }
        parentPath = parentPath.parentPath;
    }
    return expressionCount;
}

const callbackComments = {
    3: 'kinda a lot of callbacks',
    4: '4 nested callbacks, really?',
    5: 'you know they got this thing called "promises" now',
    6: 'Dante never imagined this many levels of callback hell',
    7: 'Only way to be safe is to nuke this thing from orbit'
};

function countCallbacks(path) {
    if (!path.node.type.includes('FunctionExpression')) {
        return;
    }
    if (path.node.arguments
        && path.node.arguments
            .some(arg => arg.type.includes('FunctionExpression'))) {
        return;
    }
    const depth = getCallbackDepth(path);
    if (depth >= 3) {
        const comment = depth < 7
            ? callbackComments[depth]
            : '...';
        CommentMap.addComment(path, comment);
    }

}
module.exports = countCallbacks;
