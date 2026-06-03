import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorChanger from './components/ColorChanger.jsx'
import PasswordGenerator from './components/PasswordGenerator.jsx'
// import MusicPlayer from './components/MusicPlayer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ColorChanger /> */}
    {/* <MusicPlayer/> */}
    <PasswordGenerator />
  </StrictMode>,
)
