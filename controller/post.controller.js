const db = require('../db.js')



class PostController {

	async getPosts(req, res) {
		try {

			const {user_id} = req.body

			const posts = await db.query('SELECT * FROM post where user_id = $1;', [user_id])
			res.json(posts.rows)
		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async addPost(req, res) {
		try {

			const {content, title, user_id} = req.body
			const newPost = await db.query('INSERT INTO post (content, title, user_id) values ($1, $2, $3) RETURNING *;', [content, title, user_id])
			res.json(newPost.rows[0])

		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async getPost(req, res) {
		try {

			const id = req.params.id
			const post = await db.query('SELECT * FROM post where id = $1;', [id])
			res.json(post.rows[0])

		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async updatePost(req, res) {
		try {

			const {content, title, user_id} = req.body

			const updatePerson = await db.query('UPDATE post set content = $1, title = $2 where user_id = $3 RETURNING *;', [content, title, user_id])
			res.json(updatePerson.rows)

		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async deletePost(req, res) {
		try {

			const {id} = req.body
			const deletePost = await db.query('DELETE FROM post where id = $1 RETURNING *;', [id])
			res.json(deletePost.rows)

		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}
}


module.exports = new PostController()