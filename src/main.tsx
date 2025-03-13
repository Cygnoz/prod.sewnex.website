import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ResponseProvider } from "./context/ResponseContext.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ResponseProvider>
      <App />
      </ResponseProvider>
    </BrowserRouter>
  </StrictMode>,
)
