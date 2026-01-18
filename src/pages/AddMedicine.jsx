import React from 'react'
import MedicineForm from '../components/MedicineForm '

function AddMedicine() {
    return (
        <div className='flex flex-col items-center p-8'>
            <div className='h-auto w-[700px] bg-blue-200 p-4 border-[3px] border-blue-800 rounded-xl'>
                <h1 className='text-2xl mb-2 text-blue-800 font-bold'>💊 Add Medicine</h1>
                <MedicineForm />
            </div>
        </div>
    )
}

export default AddMedicine
