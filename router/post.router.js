const Router = require('express')
const postRouter = new Router()
const PostController = require('../controller/post.controller.js')


postRouter.get('/getposts', PostController.getPosts)
postRouter.get('/post/:id', PostController.getPost)
postRouter.post('/addpost', PostController.addPost)
postRouter.put('/post', PostController.updatePost)
postRouter.delete('/post/:id', PostController.deletePost)



module.exports = postRouter
