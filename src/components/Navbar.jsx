import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className='bg-blue-500 text-white'>
            <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 gap-3'>

                <Link to="/" className='text-xl font-bold'>
                    💊 MediTRACK
                </Link>

                <div className='flex flex-col sm:flex-row gap-3 sm:gap-10 font-semibold text-center'>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add Medicine</Link>
                    <Link to="/view">View Medicine</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar