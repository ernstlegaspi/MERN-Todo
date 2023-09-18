import jwt from 'jsonwebtoken'

export const generateToken = (res, userId, expiration, maxAge) => {
	const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: expiration })

	res.cookie('jwt', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== 'development',
		sameSite: 'strict',
		maxAge: maxAge
	})
}
