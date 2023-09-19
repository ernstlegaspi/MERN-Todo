import bcrypt from 'bcrypt'
import User from '../models/user.js'
import { generateToken } from '../utils/generateToken.js'
import { _400, _500 } from '../utils/HttpStatus.js'

export const login = async (req, res) => {
	try {
		const { email, password } = req.body

		if(!email || !password) return _400(res)

		const user = await User.findOne({ email })

		if(!user) return _400(res)

		const comparePassword = await bcrypt.compare(password, user.password)

		if(!comparePassword) return _400(res)

		generateToken(res, user._id, '1h', 3600)

		res.status(200).json({ id: user._id })
	}
	catch(error) {
		_500(res)
	}
}

export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body

		if(!name || !email || !password) return _400(res)

		const findUser = await User.findOne({ email })

		if(findUser) return res.status(409).json({ message: 'Email already existing' })

		const salt = await bcrypt.genSalt(12)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = await User.create({ name, email, password: hashedPassword })

		if(!newUser) return _500(res)

		generateToken(res, newUser._id, '15m', 900)

		res.status(201).json({ id: newUser._id })
	}
	catch(error) {
		_500(res)
	}
}
