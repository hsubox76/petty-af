const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs-extra');
const countCallbacks = require('./countCallbacks');

function insertComments(originalCode, newCommentMap) {
    let codeLines = originalCode.split('\n');
    let newCodeLines = [];
    codeLines.forEach((originalLine, index) => {
        let offset = 1;
        if (newCommentMap[index + offset]) {
            const comments = newCommentMap[index + offset];
            const indentMatch = originalLine.match(/^(\s*)[^s]/);
            const indent = indentMatch ? indentMatch[1] : '';
            comments.forEach(comment => {
                newCodeLines.push(`${indent}// ${comment}`);
                offset++;
            });
        }
        newCodeLines.push(originalLine);
    });
    return newCodeLines.join('\n');
}

async function main() {
    let originalCode;
    try {
        originalCode = await fs.readFile(__dirname + '/../testdata/testcode.js', 'utf8');
    } catch(e) {
        console.error(e);
    }
    if (originalCode) {
        const ast = parser.parse(originalCode);
        const newCommentMap = [];
        traverse(ast, {
            CallExpression: {
                exit: (path) => countCallbacks(path, newCommentMap)
            }
        });
        const newCode = insertComments(originalCode, newCommentMap);
        fs.writeFile(__dirname + '/../testdata/results.js', newCode);
    }
}

main();