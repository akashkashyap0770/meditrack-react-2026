import React from 'react'
import MedicineList from '../components/MedicineList'

function ViewMedicine() {
    return (
        <div className='h-[600px] flex flex-col items-center p-6 px-16'>
            <div className='h-auto w-full bg-blue-200 p-4 mt-5 border-[3px] border-blue-800 rounded-xl'>
                <h1 className='text-2xl mb-3 text-blue-800 font-bold'>💊 All Medicine</h1>
                <MedicineList />
            </div>
        </div>
    )
}

export default ViewMedicine