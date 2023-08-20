import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import Messages from "./components/Messaging/Messages";
import Posts from "./components/Posts";
import Sidebar from "./components/Access/Sidebar";

function App() {

  const sidebarPathnames = ["/", "/messages"]
  const [query, setQuery] = useState("")
  const location=useLocation()

  return (
    <>
      <Header />
      <navLink> </navLink>
      <div id="content">
        {sidebarPathnames.includes(location.pathname)?<Sidebar query={query} setQuery={setQuery}/>:null}
        <Routes>
          <Route path="" element={<Posts query={query}/>} />
          <Route path="newuser" element={<NewUser/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="messages" element={<Messages query={query}/>} />
          <Route path="*" element={<h2>Route not found</h2>} />
          {/* <Route path="posts" element={<Posts />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
