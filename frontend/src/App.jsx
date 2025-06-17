import React, { useContext, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import UserLoginPage from './pages/UserLoginPage'
import UserSignUpPage from './pages/UserSignUpPage'
import 'remixicon/fonts/remixicon.css'
import AdminSignUpPage from './pages/AdminSignUpPage'
import AdminLoginPage from './pages/AdminLoginPage'
import UserLogOutPage from './pages/UserLogOutPage'
import UserProtectWrapper from './pages/UserProtectWrapper'
import AdminProtectWrapper from './pages/AdminProtectWrapper'
import AdminLogOut from './pages/AdminLogOutPage'
import HomeUser from './pages/HomeUser'
import DisplayAlbum from './components/DisplayAlbum'
import HomeAdmin from './pages/HomeAdmin'
import AdminPanel from './pages/AdminPanel'
import { albumsData } from './assets/assets'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

    

  return (
    <>
      <Routes>
        <Route path='/' element={<Home /> } />

        <Route path='/user-login' element={<UserLoginPage /> } />
        <Route path='/user-signup' element={<UserSignUpPage /> } />
        <Route path='/album/:id' element={<DisplayAlbum  />}  />
        <Route path='/user-home' element={
          <HomeUser />
          } />


        <Route path='/user-logout' element={
          <UserProtectWrapper>
            <UserLogOutPage />
          </UserProtectWrapper>
        } />  

        <Route path='/admin-signup' element={<AdminSignUpPage /> } />
        <Route path='/admin-login' element={<AdminLoginPage /> } />
        <Route path='/admin-home' element={
            <HomeAdmin />
        } />
        <Route path='/admin-panel /*' element={<AdminPanel /> } />

        <Route path='/admin-logout' element={
          <AdminProtectWrapper>
            <AdminLogOut />
          </AdminProtectWrapper>
        } />

      </Routes>
    </>
  )
}

export default App
