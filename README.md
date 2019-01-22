# pettier
Code commenter to make you feel bad about your code.

## Overview

Pettier is obviously inspired by [prettier](https://github.com/prettier/prettier), the popular code formatting tool.
The similarities end there.  It does not modify your code and only adds comments.  The comments are not helpful hints but
are passive aggressive judgements about your coding style.

## Installing

To install, git clone this repo.

Within the repo run `yarn install` or `npm install`.

There is currently no npm package available due to a naming conflict.

## Usage

From inside the repo:

```
node ./src/index.js [files]
```

Or full path to index.js.


### Option

Yeah there's only one option.  Hey this is an opinionated formatter.  You knew what you were getting into.  The option is
```
--copy
```
This writes out results into a new file (`*.js` becomes `*.pettified.js`) instead of ruining your current one.

## What Does It Do?

It only does 2 things right now, complain about callback depth and function length.  But I'll be adding more.

## Philosophy

The overriding, guiding philosophy of **pettier** is that it is funny if you take a letter away from **prettier**.  That's
pretty much it.

The secondary throughline of this narrative is that you can do a lot using existing tools that work with ASTs
(Abstract Syntax Trees) and it's fun to explore that.  The main tools doing the heavy lifting here are
[@babel/parser](https://babeljs.io/docs/en/next/babel-parser)
and [@babel/traverse](https://babeljs.io/docs/en/next/babel-traverse).

- @babel/parser parses the code and creates the AST.
- @babel/traverse traverses the AST for you so you don't have to remember how to do recursion.

## Contributing

Yeah go for it. I don't really know how open source works but I'm sure we can figure it out.
