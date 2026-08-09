import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'
import '../styles/App.css'
import Home from '../components/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/forms/Login'
import SignUp from '../components/forms/SignUp'


function App() {

  	return (
		<BrowserRouter>
			<Header/>

			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="login" element={<Login/>}></Route>
				<Route path="sign-up" element={<SignUp/>}></Route>
			</Routes>

			<Footer/>
		</BrowserRouter>
 	)
}

export default App
