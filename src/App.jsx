import { useState } from "react";
import NewUser from "./components/NewUser";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home page for now</div>} />
        <Route path="/newuser" element={<NewUser />} />
      </Routes>
    </>
  );
}

export default App;
