import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewUser from "./components/NewUser/NewUser";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import MessageSender from "./components/Messaging/MessageSender";
import Posts from "./components/Posts"
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="messages" element={<MessageSender />} />
          <Route path="posts" element={<Posts/>}/>
          <Route path="*" element={<h2>Route not found</h2>} />
          <Route path="single-details" element={<SinglePlayer/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
