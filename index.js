const express = require('express')
const pg = require('pg')
const userRouter = require('./router/user.router.js')
const postRouter = require('./router/post.router.js')



const PORT = 5000
const app = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/posts', postRouter)


const StartServer = () => {
	try {
		app.listen(PORT, () => console.log(`Сервер запущен по порту : ${PORT}`))
	} catch(e) {
		console.log(e)
	}
}
StartServer()