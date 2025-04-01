import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/registerPage'
import NotFound from './pages/notFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<RegisterPage />} />
        <Route path="/genres" element={<RegisterPage />} />
        <Route path="/carousel" element={<RegisterPage />} />
        <Route path="/dashboard" element={<RegisterPage />} />
        <Route path="/movies" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
