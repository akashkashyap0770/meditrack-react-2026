import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { MedicineContext } from "../context/MedicineContext";

function EditMedicine() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { medicines, updateMedicine } = useContext(MedicineContext);

    const selectedMed = medicines.find(med => med.id === id);

    const [form, setForm] = useState(selectedMed);

    if (!selectedMed) return <p className="text-center text-gray-500 mt-10">No Medicines Found</p>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMedicine(form);
        navigate("/view");
    };

    return (
        <div className='flex justify-center p-4'>
            <div className='w-full max-w-2xl bg-blue-200 p-4 border-2 border-blue-800 rounded-xl'>
                <h1 className='text-2xl mb-3 text-blue-800 font-bold'>✏️ Edit Medicine</h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
                    {Object.keys(form).filter(key => key !== "id").map(key => (
                        <div key={key} className='flex flex-col'>
                            <label className='capitalize'>{key}:</label>

                            <input
                                type={
                                    key === "expiry" ? "date" :
                                        key === "quantity" || key === "price" || key === "stock"
                                            ? "number"
                                            : "text"
                                }
                                name={key}
                                value={form[key]}
                                onChange={handleChange}
                                className="p-2 rounded border"
                                required
                            />
                        </div>
                    ))}

                    <div className='flex justify-between items-center mt-3'>
                        <button className='bg-green-600 text-white p-2 px-6 rounded-md'>
                            Update Medicine
                        </button>
                        <Link to="/view" className='underline text-blue-700'>Go Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditMedicine;
