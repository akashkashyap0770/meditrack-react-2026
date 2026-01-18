// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import MedicineProvider from './context/MedicineProvider.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MedicineProvider>
      <App />
    </MedicineProvider>
  </BrowserRouter>
)
