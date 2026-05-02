import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorChanger from './SelfPractice/ColorChanger.jsx'
import PasswordGenerator from './projects/PasswordGenerator/PasswordGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ColorChanger /> */}
    <PasswordGenerator />
  </StrictMode>,
)
