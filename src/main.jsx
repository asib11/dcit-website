import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <div className=''>
    <StrictMode>
      
      <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </StrictMode>,
  </div>
)
