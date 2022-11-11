const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetPosts)
Router.get('/:post_Id', controller.GetPostById)
Router.post('/create', controller.CreatePost)
Router.put('/:post_Id', controller.UpdatePost)
Router.delete('/:post_Id', controller.DeletePost)

module.exports = Router
