const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
const fs = require('fs-extra');

function locToString(loc) {
    return [
        loc.start.line,
        loc.start.column,
        loc.end.line,
        loc.end.column
    ].join('-');
}

function findDepth(path) {
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

async function main() {
    let file;
    try {
        file = await fs.readFile(__dirname + '/../testdata/testcode.js', 'utf8');
    } catch(e) {
        console.error(e);
    }
    if (file) {
        const deepCbs = {};
        const ast = parser.parse(file);
        traverse(ast, {
            CallExpression: {
                exit: function(path) {
                    const loc = locToString(path.node.loc);
                    if (!deepCbs[loc] && path.node.arguments.every(arg => !arg.type.includes('FunctionExpression'))) {
                        const depth = findDepth(path);
                        if (depth > 3) {
                            path.addComment('leading', ` ${depth} nested callbacks, really? `);
                            deepCbs[loc] = depth;
                        }
                    }
                }
            }
        });
        const output = generate(ast);
        console.log(output.code);
        fs.writeFile(__dirname + '/../testdata/results.js', output.code);
    }
}

main();