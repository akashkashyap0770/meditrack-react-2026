import React, { useContext, useState } from "react";
import { MedicineContext } from "../context/MedicineContext";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

function MedicineList() {

    const { medicines, deleteMedicine } = useContext(MedicineContext);

    const [search, setSearch] = useState("");

    const filteredMedicines = medicines.filter(med =>
        med.name.toLowerCase().includes(search.toLowerCase())
    );

    const getStatus = (expiryDate) => {
        const today = new Date().setHours(0, 0, 0, 0);
        const exp = new Date(expiryDate).setHours(0, 0, 0, 0);
        return exp >= today ? "Active" : "Expired";
    };

    if (medicines.length === 0) return <p className="text-center text-gray-500 mt-10">No Medicines Found</p>;

    return (
        <div className="overflow-x-auto">

            <div className='flex justify-center items-center bg-blue-400 text-white p-2 mb-3 rounded gap-2'>
                <p className="font-semibold text-2xl">SEARCH</p>
                <div className="w-full flex justify-center items-center p-2 bg-white text-black rounded">
                    <IoSearch className="text-2xl" />
                    <input
                        type="text"
                        placeholder="Search medicine..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2"
                    />
                </div>
            </div>

            {filteredMedicines.length === 0 ? (
                <p className="text-center text-gray-500">No Medicines Found</p>
            ) : (
                <table className="min-w-full border border-gray-300 rounded">
                    <thead className="bg-blue-200">
                        <tr>
                            <th className="border">ID</th>
                            <th className="border">Name</th>
                            <th className="border">Company</th>
                            <th className="border">Purpose</th>
                            <th className="border">Quantity</th>
                            <th className="border">Price</th>
                            <th className="border">Stock</th>
                            <th className="border">Expiry</th>
                            <th className="border">Status</th>
                            <th className="border">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredMedicines.map((med) => (
                            <tr key={med.id} className="text-center hover:bg-blue-100">
                                <td className="border">{med.id.slice(0, 6)}</td>
                                <td className="border">{med.name}</td>
                                <td className="border">{med.company}</td>
                                <td className="border">{med.purpose}</td>
                                <td className="border">{med.quantity}</td>
                                <td className="border">₹{med.price}</td>
                                <td className="border">{med.stock}</td>
                                <td className="border">{med.expiry}</td>
                                <td className="border font-semibold">
                                    {getStatus(med.expiry) === "Active" ? (
                                        <span className="text-green-600">Active</span>
                                    ) : (
                                        <span className="text-red-600">Expired</span>
                                    )}
                                </td>
                                <td className="border p-1">
                                    <div className="flex justify-center gap-2">
                                        <Link
                                            to={`/edit/${med.id}`}
                                            className="bg-yellow-500 text-white px-3 py-0.5 rounded text-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deleteMedicine(med.id)}
                                            className="bg-red-500 text-white px-3 py-0.5 rounded text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}
        </div>
    );
}

export default MedicineList;
