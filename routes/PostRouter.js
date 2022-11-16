const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get(
  '/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetPosts
)
Router.get(
  '/:post_Id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetPostById
)
Router.post(
  '/create',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreatePost
)
Router.put(
  '/:post_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
Router.delete(
  '/:post_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = Router
