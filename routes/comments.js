module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.blogs[req.params.blogId].comments);
    },
    addComment(req, res) {
        let newComment = req.body;
        let commentId = req.store.blogs[req.params.blogId].comments.length;
        req.store.blogs[req.params.blogId].comments.push(newComment);
        res.status(201).send({ commentId: commentId });
    },
    updateComment(req, res) {
        req.store.blogs[req.params.blogId].comments[req.params.commentId] = req.body;
        res.status(200).send(req.store.blogs[req.params.blogId].comments[req.params.commentId]);
    },
    removeComment(req, res) {
        req.store.blogs[req.params.blogId].comments.splice(req.params.commentId, 1);
        res.status(204).send("Succesfully Deleted");
    }
};