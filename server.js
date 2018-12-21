const express = require('express');
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const routes = require('./routes/index.js')
const port = process.env.PORT || 3000

let store = { blogs: [] }
app = express()
const middleware = (request, response, next) => {
    request.store = store
    switch (request.method) {
        case 'GET': {
            if (request.url === '/blogs') { app.get('/blogs', routes.Blogs.getBlogs) }
            else { app.get('/blogs/:blogId/comments', routes.Comments.getComments) }
        }
        case 'POST': {
            if (request.url === '/blogs') { app.post('/blogs', routes.Blogs.addBlog) }
            else { app.post('/blogs/:blogId/comments', routes.Comments.addComment) }
        }
        case 'PUT': {
            if (request.url === '/blogs') { app.put('/blogs/:blogId', routes.Blogs.updateBlog) }
            else { app.put('/blogs/:blogId/comments/:commentID', routes.Comments.updateComment) }
        }
        case 'DELETE': {
            if (request.url === '/blogs') { app.delete('/blogs/:blogId', routes.Blogs.removeBlog) }
            else { app.delete('/blogs/:blogId/comments/:commentID', routes.Comments.removeComment) }
        }
    }
    next()
}
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(middleware)
app.use(errorHandler())
app.listen(port)
