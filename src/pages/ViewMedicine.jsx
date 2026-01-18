import React from 'react'
import MedicineList from '../components/MedicineList'

function ViewMedicine() {
    return (
        <div className='flex flex-col items-center p-4'>
            <div className='w-full max-w-6xl bg-blue-200 p-4 mt-2 border-2 border-blue-800 rounded-xl'>
                <h1 className='text-2xl mb-3 text-blue-800 font-bold'>💊 All Medicine</h1>
                <MedicineList />
            </div>
        </div>
    )
}

export default ViewMedicine