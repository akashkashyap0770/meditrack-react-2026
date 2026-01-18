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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main Content will take full available height */}
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddMedicine />} />
          <Route path='/view' element={<ViewMedicine />} />
          <Route path='/edit/:id' element={<EditMedicine />} />
        </Routes>
      </div>
      {/* Footer always at bottom */}
      <Footer />
    </div>
  )
}


export default App