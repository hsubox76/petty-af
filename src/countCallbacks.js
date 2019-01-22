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
};

function countCallbacks(path) {
    if (path.node.arguments.every(arg => !arg.type.includes('FunctionExpression'))) {
        const depth = getCallbackDepth(path);
        if (depth >= 3) {
            const comment = depth < 6
                ? callbackComments[depth]
                : 'Dante never imagined this many levels of callback hell';
            CommentMap.addComment(path, comment);
        }
    }

}
module.exports = countCallbacks;
