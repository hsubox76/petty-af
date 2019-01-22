class CommentMap {
    constructor() {
        this.comments = [];
    }
    addComment(path, comment) {
        const startLine = path.node.loc.start.line;
        if (!this.comments[startLine]) {
            this.comments[startLine] = [];
        }
        this.comments[startLine].push(comment);
    }
}

const cm = new CommentMap();

module.exports = cm;
