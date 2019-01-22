#!/usr/bin/env node

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs-extra');
const argv = require('yargs').argv;
const countCallbacks = require('./countCallbacks');
const countFunctionLines = require('./countFunctionLines');
const CommentMap = require('./CommentMap');

function insertComments(originalCode) {
    let codeLines = originalCode.split('\n');
    let newCodeLines = [];
    codeLines.forEach((originalLine, index) => {
        let offset = 1;
        const comments = CommentMap.comments[index + offset];
        if (comments) {
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

async function pettifyFile(filename) {
    if (filename.includes('.pettified.')) return;
    let originalCode;
    try {
        originalCode = await fs.readFile(filename, 'utf8');
    } catch(e) {
        console.error(e);
    }
    if (originalCode) {
        const ast = parser.parse(originalCode);
        traverse(ast, {
            CallExpression: {
                exit: (path) => countCallbacks(path)
            },
            FunctionDeclaration: (path) => countFunctionLines(path)
        });
        const newCode = insertComments(originalCode);
        let outputFile = filename;
        if (argv.copy) {
            const pathParts = filename.split('.');
            outputFile = [...pathParts.slice(0, -1), 'pettified', pathParts.slice(-1)].join('.');
        }
        console.log(outputFile);
        fs.writeFile(outputFile, newCode);
    }
}

async function main() {
    const files = argv._;
    files.forEach(pettifyFile);
}

main();