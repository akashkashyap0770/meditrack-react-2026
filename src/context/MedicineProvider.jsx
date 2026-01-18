import { useEffect, useState } from "react";
import { MedicineContext } from "./MedicineContext";

const MedicineProvider = ({ children }) => {

    const [medicines, setMedicines] = useState(() => {
        const saved = localStorage.getItem("medicines");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("medicines", JSON.stringify(medicines));
    }, [medicines]);

    const capitalize = (text) => {
        if (!text) return "";
        const clean = text.trim();
        return clean.charAt(0).toUpperCase() + clean.slice(1);
    };

    const generateId = () => crypto.randomUUID(); // UUID

    // Add Medicine
    const addMedicine = (medicine) => {
        const formattedMedicine = {
            ...medicine,
            name: capitalize(medicine.name),
            company: capitalize(medicine.company),
            purpose: capitalize(medicine.purpose),
            id: generateId()
        };
        setMedicines(meds => [...meds, formattedMedicine]);
    };

    // Updated Medicine
    const updateMedicine = (updatedMedicine) => {
        const formattedUpdateMedicine = {
            ...updatedMedicine,
            name: capitalize(updatedMedicine.name),
            company: capitalize(updatedMedicine.company),
            purpose: capitalize(updatedMedicine.purpose),
            id: updatedMedicine.id
        }
        setMedicines(medicines =>
            medicines.map(meds =>
                meds.id === updatedMedicine.id ? formattedUpdateMedicine : meds)
        );
    };

    // Delete Medicine
    const deleteMedicine = (id) => {
        setMedicines(meds => meds.filter(med => med.id !== id));
    };

    return (
        <MedicineContext.Provider value={{ medicines, addMedicine, updateMedicine, deleteMedicine }}>
            {children}
        </MedicineContext.Provider>
    );
};

export default MedicineProvider;
