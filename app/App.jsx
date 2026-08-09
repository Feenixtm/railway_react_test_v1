import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'
import '../styles/App.css'
import Home from '../components/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/forms/Login'
import SignUp from '../components/forms/SignUp'
import MissingPage from '../components/MissingPage'
import ProtectedRoute from '../components/ProtectedRoute'


function App() {

  	return (
		<BrowserRouter>
			<Header/>

			<Routes>
				<Route path="login" element={<Login/>}></Route>
				<Route path="sign-up" element={<SignUp/>}></Route>

				<Route path='/' element={
					<ProtectedRoute>
						<Home/>
					</ProtectedRoute>
				}>
				</Route>

				<Route path='*' element={
					<ProtectedRoute>
						<MissingPage/>
					</ProtectedRoute>
				}>
				</Route>
				
			</Routes>

			<Footer/>
		</BrowserRouter>
 	)
}

export default App
