import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import Messages from "./components/Messaging/Messages";
import Posts from "./components/Posts";
import Sidebar from "./components/Access/Sidebar";
import UserPosts from "./components/UserPosts/UserPosts";
import MakePost from "./components/Posts/MakePost";
import Navbar from "./components/Navigation/Navbar";
import Selling from "./components/Selling/Selling";
import NewSelling from "./components/Selling/NewSelling";



function App() {

  const sidebarPathnames = ["/", "/messages", "/userposts"]
  const [query, setQuery] = useState("")
  const location=useLocation()

  return (
    <>
      <Header />
     
      <div id="content">
        {sidebarPathnames.includes(location.pathname)?<Sidebar query={query} setQuery={setQuery}/>:null}
        <Routes>
          <Route path="" element={<Posts query={query}/>} />
          <Route path="newuser" element={<NewUser/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="messages" element={<Messages query={query}/>} />
        
          <Route path="makeposts" element={<MakePost/>}/>
          {/* I added an "s" to users for the link below */}
          <Route path="usersposts" element={<Selling />} />
          <Route path="postcreator" element={<NewSelling />} />
          <Route path="Messages" element={<Navbar/>}/>
          <Route path="My posts" element={<Navbar/>}/>
          <Route path="All Listings" element={<Navbar/>}/>
          <Route path="*" element={<h2>Route not found</h2>} />
        </Routes>
      
      </div>
      <div>
      <Navbar />
    </div>
    </>
  );
}
export default App;
