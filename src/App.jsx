
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import NavBar from './Components/shared/NavBar'
import { useState } from 'react'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  



  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route element={<ProtectedRoutes/>}>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/purchases" element={<Purchases/>} />
        </Route>
        <Route path="*" element={<h1>error</h1>} />
      </Routes>
    </div>
  )
}

export default App
