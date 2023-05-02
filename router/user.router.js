const Router = require('express')
const userRouter = new Router()
const UserController = require('../controller/user.controller.js')



userRouter.get('/users', UserController.getUsers)
userRouter.get('/user/:id', UserController.getUser)
userRouter.post('/adduser', UserController.addUser)
userRouter.put('/user', UserController.updateUser)
userRouter.delete('/user/:id', UserController.deleteUser)


module.exports = userRouter