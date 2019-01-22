# petty-af
Code commenter to make you feel bad about your code.

## Overview

petty-af was inspired by [prettier](https://github.com/prettier/prettier),
the popular code formatting tool.

The similarities end there.  It does not modify your code and only adds
comments.  The comments are not helpful hints but
are passive aggressive judgements about your coding style.

## Installing

In your repo:

```
npm install petty-af
```
or
```
yarn add petty-af
```

Or you could globally install it (but why would you??):

```
npm install -g petty-af
```

## Usage

Locally
```
./node_modules/.bin/petty-af [files]
```

Globally
```
petty-af [files]
```

### Option

Yeah there's only one option.  Hey this is an opinionated formatter.  You knew
what you were getting into.  The option is
```
--copy
```
This writes out results into a new file (`*.js` becomes `*.pettified.js`)
instead of ruining your current one.

## What Does It Do?

It only does 2 things right now, complain about callback depth and function
length.  But I'm planning to add more.

## Philosophy

The core inspiration for this project is "Wouldn't it be funny if
you removed a letter from **prettier**, thus spelling **pettier**?
What would a tool like that do?"  The exact name is unfortunately not
available as such but the spirit remains.

The more useful takeaway is it's a fun way to demo that you can do a lot
using existing tools that work with ASTs
(Abstract Syntax Trees).  The main tools doing the heavy lifting here are
[@babel/parser](https://babeljs.io/docs/en/next/babel-parser)
and [@babel/traverse](https://babeljs.io/docs/en/next/babel-traverse).

- @babel/parser parses the code and creates the AST.
- @babel/traverse traverses the AST for you so you don't have to remember how
to do recursion.

The plan is to write some blog posts explaining how anyone can do this.

## Contributing

Yeah go for it. I don't really know how open source works but I'm sure we can
figure it out.
