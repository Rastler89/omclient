import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register'
import { Menu } from './components/Menu/Menu'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
