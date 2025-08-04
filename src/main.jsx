import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UnderConstruction from './UnderConstruction.jsx'

// Switch between App and UnderConstruction by commenting/uncommenting below:
// To show the full website, uncomment the first line and comment the second
// To show "Under Construction", comment the first line and uncomment the second

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UnderConstruction />
  </StrictMode>,
)
