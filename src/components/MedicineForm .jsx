import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MedicineContext } from '../context/MedicineContext';

function MedicineForm() {

    const { addMedicine } = useContext(MedicineContext);

    const [form, setForm] = useState({
        name: "",
        company: "",
        purpose: "",
        quantity: "",
        price: "",
        stock: "",
        expiry: "",
    });

    const placeholders = {
        name: "Enter medicine name",
        company: "Enter company name",
        purpose: "Enter purpose (e.g. Fever, Pain)",
        quantity: "Enter quantity (e.g. 10 strips)",
        price: "Enter price in ₹",
        stock: "Enter stock count",
        expiry: "Select expiry date"
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMedicine(form);
        setForm({ name: "", company: "", purpose: "", quantity: "", price: "", stock: "", expiry: "" });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col text-[15px] text-gray-700 gap-y-2'>
            {Object.keys(form).map((key) => (
                <div key={key} className='flex flex-col'>
                    <label className='capitalize'>{key}:</label>
                    <input
                        type={key === "expiry" ? "date" : "text"}
                        name={key}
                        value={form[key]}
                        placeholder={placeholders[key]}
                        onChange={handleChange}
                        required
                        className="p-2 rounded border"
                    />
                </div>
            ))}

            <div className='flex justify-between items-center'>
                <button type='submit' className='bg-green-600 text-white p-2 px-6 mt-3 rounded-md'>Add Medicine</button>
                <Link to="/view" className='underline text-blue-600'>Go to List</Link>
            </div>
        </form>
    );
}

export default MedicineForm;
