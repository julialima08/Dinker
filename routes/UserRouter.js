const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.get('/:user_Id', controller.GetUserById)
Router.post('/', controller.CreateUser)
Router.put('/:user_Id', controller.UpdateUser)
Router.delete('/:user_Id', controller.DeleteUser)
// Router.get('/:user_Id/posts', controller.GetUserPosts)

module.exports = Router
