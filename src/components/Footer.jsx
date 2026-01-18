import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='flex justify-center flex-col p-5 bg-blue-500 text-white'>
            <div className='flex justify-around items-center mb-5'>
                <div className='w-[400px] flex flex-col gap-y-1'>
                    <h1 className='text-lg font-semibold'>💊 MediTRACK</h1>
                    <p className='text-sm'>MediTRACK helps you manage and track your medicines easily.
                        Never miss expiry dates or stock updates again.</p>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Quick Links</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add Medicine</Link></li>
                        <li><Link to="/view">View Medicines</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>📞 Contact Us</h1>
                    <p className="text-sm">Email: meditrack@gmail.com</p>
                    <p className="text-sm">Phone: +91 98765 43210</p>
                    <p className="text-sm">Address: Mumbai, India</p>
                </div>
            </div>

            {/* Underline Divider */}
            <div className='flex justify-center'>
                <p className='border-t border-gray-300 my-6 w-[85%]'></p>
            </div>

            <div className='flex justify-center items-center'>
                <p>© 2026 MediTRACK. All Rights Reserved.</p>
                <p>Made with by Akash</p>
            </div>
        </div>
    )
}

export default Footer