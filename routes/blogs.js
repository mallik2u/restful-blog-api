module.exports = {
    getBlogs(req, res) {
        res.status(200).send(req.store.blogs);
    },
    addBlog(req, res) {
        let newBlog = req.body;
        let blogId = req.store.blogs.length;
        req.store.blogs.push(newBlog);
        res.status(201).send({ blogId: blogId })
    },
    updateBlog(req, res) {
        req.store.blogs[req.params.blogId] = req.body;
        res.status(200).send(req.store.blogs[req.params.blogId]);
    },
    removeBlog(req, res) {
        req.store.blogs.splice(req.params.blogId, 1);
        res.status(204).send();
    }
};