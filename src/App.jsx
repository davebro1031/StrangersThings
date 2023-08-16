import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import NewUser from './components/NewUser'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Sidebar from './components/Sidebar'

function App() {
  return (
  <>
    <Navbar/>
    <div id="content">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newuser" element={<NewUser/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </div>
  </>
  )
}

export default App;
