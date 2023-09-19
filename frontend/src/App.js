import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import Post from './components/home/Post'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Post />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App