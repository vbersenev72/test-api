const db = require('../db.js')



class UserController {

	async addUser(req, res) {
		try {
			const {name, username} = req.body
			const newPerson = await db.query('INSERT INTO person (name, username) values ($1, $2) RETURNING *;', [name, username])

			res.json(newPerson.rows[0])
		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async updateUser(req, res) {
		try {

			const {id, name, username} = req.body
			const user = await db.query('UPDATE person set name = $1, username = $2 where id = $3 RETURNING *;', [name, username, id])
			res.json(user.rows[0])

		} catch(e) {
			console.log(e)
			res.status(400).json({message: "error", e})
		}
	}


	async getUsers(req, res) {
		try {

			const users = await db.query('SELECT * FROM person;')
			res.json(users.rows)

		} catch(error) {
			console.log(error)
			res.status(400).json({message: "error", error})
		}
	}


	async getUser(req, res) {
		try {

			const id = req.params.id
			const person = await db.query("SELECT * FROM person where id = $1;", [id])
			res.json(person.rows[0])

		} catch(error) {
			console.log(error)
			res.status(400).json({message: "error", error})
		}
	}


	async deleteUser(req, res) {
		try {

			const id = req.params.id
			const person = await db.query("DELETE FROM person where id = $1;", [id])
			res.json(person.rows[0])

		} catch(error) {
			console.log(error)
			res.status(400).json({message: "error", error})
		}
	}

}


module.exports = new UserController()