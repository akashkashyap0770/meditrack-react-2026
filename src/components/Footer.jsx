import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-blue-500 text-white mt-10'>

            {/* Main Footer Content */}
            <div className='max-w-6xl mx-auto px-4 py-6 
                            flex flex-col md:flex-row 
                            gap-6 md:gap-10 
                            justify-between'>

                {/* Brand */}
                <div className='md:w-1/3 text-center md:text-left'>
                    <h1 className='text-lg font-semibold'>💊 MediTRACK</h1>
                    <p className='text-sm mt-1'>
                        Manage and track your medicines easily.
                    </p>
                </div>

                {/* Links */}
                <div className='text-center md:text-left'>
                    <h1 className='text-lg font-semibold'>Quick Links</h1>
                    <ul className='text-sm space-y-1 mt-1'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add Medicine</Link></li>
                        <li><Link to="/view">View Medicines</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className='text-center md:text-left'>
                    <h1 className='text-lg font-semibold'>Contact</h1>
                    <p className='text-sm mt-1'>meditrack@gmail.com</p>
                    <p className='text-sm'>+91 98765 43210</p>
                    <p className='text-sm'>Mumbai, India</p>
                </div>
            </div>

            {/* Divider */}
            <div className='border-t border-blue-300'></div>

            {/* Bottom Line */}
            <div className='text-center text-sm py-3 px-4'>
                © 2026 MediTRACK | Made by Akash
            </div>

        </footer>
    )
}

export default Footer