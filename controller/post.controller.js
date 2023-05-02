const db = require('../db.js')



class PostController {

	async getPosts(req, res) {
		try {
			const posts = await db.query('SELECT * FROM post;')

			res.json(posts.rows)
		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async addPost(req, res) {
		try {

			

		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async getPost(req, res) {
		try {



		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async updatePost(req, res) {
		try {



		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async deletePost(req, res) {
		try {



		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}
}


module.exports = new PostController()