import bcrypt from 'bcrypt'
import User from '../models/user.js'
import { generateToken } from '../utils/generateToken.js'

export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body

		if(!name || !email || !password) res.status(400).json({ message: 'Invalid credentials' })

		const newUser = await User.create({ name, email, password })

		if(!newUser) res.status(500).json({ message: 'Internal server error' })

		generateToken(res, newUser._id, '15m', 900)
	}
	catch(error) {
		res.status(500).json({ message: 'Internal server error' })
	}
}
