import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'
import '../styles/App.css'
import Home from '../components/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'


function App() {

  	return (
		<BrowserRouter>
			<Header/>

			<Routes>
				<Route path="/" element={<Home/>}></Route>
			</Routes>

			<Footer/>
		</BrowserRouter>
 	)
}

export default App
