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

function countCallbacks(path, newCommentMap) {
    if (path.node.arguments.every(arg => !arg.type.includes('FunctionExpression'))) {
        const depth = getCallbackDepth(path);
        if (depth >= 3) {
            const comment = depth < 6
                ? callbackComments[depth]
                : 'Dante never imagined this many levels of callback hell';
            // path.addComment('leading', ` ${comment} `, false);
            const startLine = path.node.loc.start.line;
            if (!newCommentMap[startLine]) {
                newCommentMap[startLine] = [];
            }
            newCommentMap[startLine].push(comment);
        }
    }

}
module.exports = countCallbacks;
