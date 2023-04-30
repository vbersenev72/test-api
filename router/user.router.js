const Router = require('express')
const userRouter = new Router()
const UserController = require('../controller/user.controller.js')



userRouter.get('/users', UserController.getUsers)
userRouter.get('/user/:id', UserController.getUser)
userRouter.post('/adduser', UserController.addUser)
userRouter.delete('/user/:id', UserController.deleteUser)
userRouter.put('/user', UserController.updateUser)


module.exports = userRouter