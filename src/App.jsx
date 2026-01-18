import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddMedicine from './pages/AddMedicine'
import ViewMedicine from './pages/ViewMedicine'
import EditMedicine from './components/EditMedicine'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddMedicine />} />
        <Route path='/view' element={<ViewMedicine />} />
        <Route path='/edit/:id' element={<EditMedicine />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App