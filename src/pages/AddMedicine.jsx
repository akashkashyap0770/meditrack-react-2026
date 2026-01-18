import React from 'react'
import MedicineForm from '../components/MedicineForm '

function AddMedicine() {
    return (
        <div className='flex justify-center p-4'>
            <div className='w-full max-w-2xl bg-blue-200 p-4 mt-2 border-2 border-blue-800 rounded-xl'>
                <h1 className='text-2xl mb-2 text-blue-800 font-bold'>💊 Add Medicine</h1>
                <MedicineForm />
            </div>
        </div>
    )
}

export default AddMedicine
