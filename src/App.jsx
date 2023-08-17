import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NewUser from "./components/NewUser/NewUser";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import Messages from "./components/Messaging/Messages";
import Posts from "./components/Posts";

function App() {

  const [currentToken, setCurrentToken] = useState(null)
  const [currentUser, setCurrentUser] = useState(null) 

  useEffect(()=>{
    let savedToken = localStorage.getItem("token")
    savedToken ? setCurrentToken(savedToken): setCurrentToken(null)
    let savedUser = localStorage.getItem("user")
    savedUser ? setCurrentUser(savedUser) : setCurrentUser(null)
  },[])

  return (
    <>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="messages" element={<Messages />} />
          <Route path="*" element={<h2>Route not found</h2>} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
