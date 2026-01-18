import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className='flex justify-between p-4 bg-blue-500 text-white '>
            <Link to="/" className='flex justify-center items-center text-xl relative left-5'>💊 MediTRACK</Link>
            <div className='flex justify-center items-center font-semibold gap-10 relative right-12'>
                <Link to="/">Home</Link>
                <Link to="/add">Add Medicine</Link>
                <Link to="/view">View Medicine</Link>
            </div>
        </nav>
    )
}

export default Navbar