import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import NewUser from './components/NewUser'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newuser" element={<NewUser/>}/>
    </Routes>
  </>
  )
}

export default App
