/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


import SecurityCheckForm from "./components/SecurityCheckForm/SecurityCheckForm.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SecurityCheckForm /> 
    
  </StrictMode>,
)


