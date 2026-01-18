import React from 'react'
import { Link } from "react-router-dom"
import { GiMedicines } from "react-icons/gi";
import { GrAdd } from "react-icons/gr";
import { MdViewList } from "react-icons/md";

function Home() {
    return (
        <div className='min-h-screen flex justify-center items-center p-4'>
            <div className='w-full max-w-4xl bg-blue-200 text-blue-700 p-6 sm:p-10 rounded-2xl text-center space-y-3'>

                <h1 className='text-3xl sm:text-5xl text-blue-500 font-bold'>
                    Welcome to MediTrack
                </h1>

                <h3 className='text-red-400'>
                    Manage your medicines easily and efficiently.
                </h3>

                <p className='text-lg font-semibold'>
                    MediTrack helps you:
                </p>

                <ul className='flex flex-col items-start mx-auto w-fit gap-3'>
                    <li className="flex items-center gap-2">💊 Add new medicines</li>
                    <li className="flex items-center gap-2">💊 View saved medicines</li>
                    <li className="flex items-center gap-2">💊 Search medicines</li>
                </ul>

                <p className='text-gray-500 text-sm'>
                    All data saved locally
                </p>

                <div className='flex flex-col sm:flex-row justify-center gap-4 mt-4'>
                    <Link to="/add">
                        <button className='bg-blue-800 text-white px-2 py-2 rounded-md w-full sm:w-auto'>
                            Add Medicine
                        </button>
                    </Link>

                    <Link to="/view">
                        <button className='bg-blue-800 text-white px-5 py-2 rounded-md w-full sm:w-auto'>
                            View Medicines
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home