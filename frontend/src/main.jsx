import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import AdminContext from './context/AdminContext.jsx'
import PlayerContextProvider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminContext>
      <UserContext>
        <BrowserRouter>
          <PlayerContextProvider>
            <App />
          </PlayerContextProvider>
        </BrowserRouter>
      </UserContext>
    </AdminContext>
  </StrictMode>,
)
