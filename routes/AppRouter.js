const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
