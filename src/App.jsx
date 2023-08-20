import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewUser from "./components/NewUser";
import Navbar from "./components/Navbar";
import Posts from "./components/Home";
import LoginPage from "./components/LoginPage";
import Sidebar from "./components/Sidebar";
import MessageSender from "./components/Messaging/MessageSender";

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="messages" element={<MessageSender />} />
          <Route path="*" element={<h2>Route not found</h2>} />
        </Routes>
       
      </div>
    </>
  );
}

export default App;
