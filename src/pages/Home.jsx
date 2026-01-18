import React from 'react'
import { Link } from "react-router-dom"
import { GiMedicines } from "react-icons/gi";
import { GrAdd } from "react-icons/gr";
import { MdViewList } from "react-icons/md";

function Home() {
    return (
        <div className='h-[600px] flex flex-col justify-center items-center p-6 px-16'>
            <div className='w-full h-[470px] flex flex-col items-center bg-blue-200 space-y-2 text-blue-700 p-10 rounded-2xl'>
                <h1 className='text-blue-500 font-bold text-5xl'>Welcome to MediTrack</h1>
                <h3 className='mb-10 text-red-400'>Manage your medicines easily and efficiently.</h3>

                <p className='text-lg font-semibold'>MediTrack is a simple medicine management app where you can:</p>
                <ul className='flex flex-col items-start p-4 rounded-lg gap-3'>
                    <li className="flex items-center gap-2"><GiMedicines />Add new medicines with details</li>
                    <li className="flex items-center gap-2"><GiMedicines />View all saved medicines</li>
                    <li className="flex items-center gap-2"><GiMedicines />Search medicines by name</li>
                </ul>
                <p className='text-gray-400'>All your data is saved locally, so it remains even after refreshing the page.</p>
                <div className='flex p-2 gap-x-5 mt-5'>
                    <Link to="/add">
                        <button className='flex items-center gap-2 bg-blue-800 text-white text-md p-2 px-5 rounded-md'><GrAdd /> Add Medicine</button>
                    </Link>

                    <Link to="/view">
                        <button className='flex items-center gap-2 bg-blue-800 text-white text-md p-2 px-5 rounded-md'><MdViewList /> View Medicines</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home