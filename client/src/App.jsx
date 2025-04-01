import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/registerPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
