import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useRegisterMutation } from '../../slices/userEndpoints'
import { setCredentials } from '../../slices/authSlice'

const Home = () => {
	const dispatch = useDispatch()
	const [register] = useRegisterMutation()
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const submitHandler = async e => {
		e.preventDefault()

		try {
			const res = await register({ name, email, password }).unwrap()
			dispatch(setCredentials({ ...res }))
			alert('Registered')
		}
		catch(e) {
			alert(`Error: ${e}`)
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<input type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)} /> <br /><br />
			<input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} /> <br /><br />
			<input type="password" placeholder="Password" password="password" value={password} onChange={e => setPassword(e.target.value)} /> <br /><br />
			<input type="submit" value="Register" />
		</form>
	)
}

export default Home
