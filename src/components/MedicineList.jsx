import React, { useContext, useState } from "react";
import { MedicineContext } from "../context/MedicineContext";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import MedicineCards from "./MedicineCards";

function MedicineList() {
    const { medicines, deleteMedicine } = useContext(MedicineContext);
    const [search, setSearch] = useState("");

    const filteredMedicines = medicines.filter((med) =>
        med.name.toLowerCase().includes(search.toLowerCase())
    );

    const getStatus = (expiryDate) => {
        const today = new Date().setHours(0, 0, 0, 0);
        const exp = new Date(expiryDate).setHours(0, 0, 0, 0);
        return exp >= today ? "Active" : "Expired";
    };

    if (medicines.length === 0)
        return <p className="text-center text-gray-500 mt-10">No Medicines Found</p>;

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row justify-center items-center bg-blue-400 text-white p-2 mb-3 rounded gap-2">
                <p className="font-semibold text-xl">SEARCH</p>
                <div className="w-full flex items-center bg-white text-black rounded px-2">
                    <IoSearch className="text-xl" />
                    <input
                        type="text"
                        placeholder="Search medicine..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 outline-none"
                    />
                </div>
            </div>

            {/* ===== Desktop Table ===== */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded text-sm">
                    <thead className="bg-blue-200">
                        <tr>
                            <th className="border p-2">ID</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Company</th>
                            <th className="border p-2">Purpose</th>
                            <th className="border p-2">Qty</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Stock</th>
                            <th className="border p-2">Expiry</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredMedicines.map((med) => (
                            <tr key={med.id} className="text-center hover:bg-blue-100">
                                <td className="border p-1">{med.id.slice(0, 6)}</td>
                                <td className="border p-1">{med.name}</td>
                                <td className="border p-1">{med.company}</td>
                                <td className="border p-1">{med.purpose}</td>
                                <td className="border p-1">{med.quantity}</td>
                                <td className="border p-1">₹{med.price}</td>
                                <td className="border p-1">{med.stock}</td>
                                <td className="border p-1">{med.expiry}</td>
                                <td className="border p-1 font-semibold">
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
                                            className="bg-yellow-500 text-white px-3 py-1 rounded text-xs"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => deleteMedicine(med.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===== Mobile Cards ===== */}
            <MedicineCards
                medicines={filteredMedicines}
                deleteMedicine={deleteMedicine}
                getStatus={getStatus}
            />

        </div>
    );
}

export default MedicineList;
