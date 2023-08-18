import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import Messages from "./components/Messaging/Messages";
import Posts from "./components/Posts";
import PostDetailPage from "./components/PostDetailPage";

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="messages" element={<Messages />} />
          <Route path="postdetailpage" element={<PostDetailPage />} />
          <Route path="*" element={<h2>Route not found</h2>} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
