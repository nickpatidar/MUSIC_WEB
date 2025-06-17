import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSong from './AddSong';
import AddAlbum from './AddAlbum';
import ListSong from './ListSong';
import ListAlbum from './ListAlbum';
import SideBar from '../components/SideBar';
import AdminNavbar from '../components/AdminNavbar';

const AdminPanel = () => {

  return (
    <div className='flex items-start min-h-screen'>
        <ToastContainer />
        <SideBar />

        <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
          <AdminNavbar />

            <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
                <Routes>
                    <Route path='/add-song' element={<AddSong/>} />
                    <Route path='/add-album' element={<AddAlbum/>} />
                    <Route path='/list-song' element={<ListSong/>} />
                    <Route path='/list-album' element={<ListAlbum/>} />
                </Routes>
            </div>

        </div>
      
    </div>
  )
}

export default AdminPanel
