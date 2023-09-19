export const _400 = res => res.status(400).json({ message: 'Invalid Credentials' })

export const _500 = res => res.status(500).json({ message: 'Internal server error' })
