import React from "react";
import { Link } from "react-router-dom";

function MedicineCards({ medicines, deleteMedicine, getStatus }) {
  return (
    <div className="md:hidden space-y-4">
      {medicines.map((med) => (
        <div
          key={med.id}
          className="bg-white p-3 rounded border border-blue-300 shadow-sm"
        >
          <p><span className="font-semibold">ID:</span> {med.id.slice(0, 6)}</p>
          <p><span className="font-semibold">Name:</span> {med.name}</p>
          <p><span className="font-semibold">Company:</span> {med.company}</p>
          <p><span className="font-semibold">Purpose:</span> {med.purpose}</p>
          <p><span className="font-semibold">Quantity:</span> {med.quantity}</p>
          <p><span className="font-semibold">Price:</span> ₹{med.price}</p>
          <p><span className="font-semibold">Stock:</span> {med.stock}</p>
          <p><span className="font-semibold">Expiry:</span> {med.expiry}</p>

          <p>
            <span className="font-semibold">Status:</span>{" "}
            {getStatus(med.expiry) === "Active" ? (
              <span className="text-green-600">Active</span>
            ) : (
              <span className="text-red-600">Expired</span>
            )}
          </p>

          <div className="flex gap-3 mt-2">
            <Link
              to={`/edit/${med.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteMedicine(med.id)}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedicineCards;
