import React, { useState } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link } from 'react-router-dom'

const Header = () => {
	const [toggleTodo, setToggleTodo] = useState(false)

	return (
		<header className="flex items-center justify-between bg-slate-900 px-2 py-3">
			<Link to="/">
				<h1 className="text-white font-bold text-2xl">TodoLists</h1>
			</Link>
			<div className="flex items-center relative">
				<LazyLoadImage className="rounded-full" src="/img/placeholder.jpg" width={40} height={40} alt="User" effect='blur' />
				<button onClick={() => setToggleTodo(prev => !prev)} className="ml-3 rounded-full py-1 px-3 text-slate-900 bg-white text-center">Add Todo</button>
				{toggleTodo ? <div className="bg-slate-900 w-[300px] pb-[9px] absolute top-[59px] right-0">
					<div className="flex justify-center flex-col">
						<input className="p-2 bg-transparent outline-none text-white" type="text" placeholder="Title" name="title" />
						<textarea className="p-2 bg-transparent resize-none outline-none text-white h-[200px]" placeholder="Body" name="body"></textarea>
						<button className="bg-white w-[95%] m-auto py-1 rounded hover:bg-slate-100">Add</button>
					</div>
				</div> : null}
			</div>
		</header>
	)
}

export default Header