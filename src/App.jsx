import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import MessageSender from "./components/Messaging/MessageSender";
import Posts from "./components/Posts"
import SinglePlayer from "./components/SinglePlayer";
import Messages from "./components/Messaging/Messages";
import Sidebar from "./components/Access/Sidebar";
import UserPosts from "./components/UserPosts/UserPosts";

function App() {

  const sidebarPathnames = ["/", "/messages", "/userposts"]
  const [query, setQuery] = useState("")
  const location=useLocation()

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
          <Route path="" element={<Posts query={query}/>} />
          <Route path="newuser" element={<NewUser/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="messages" element={<Messages query={query}/>} />
          <Route path="userposts" element={<UserPosts query={query}/>} />
          <Route path="*" element={<h2>Route not found</h2>} />
          <Route path="single-details" element={<SinglePlayer/>}/>
          {/* <Route path="posts" element={<Posts />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
