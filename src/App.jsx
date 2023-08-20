import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import Messages from "./components/Messaging/Messages";
import Posts from "./components/Posts";
import Sidebar from "./components/Access/Sidebar";
import UserPosts from "./components/UserPosts/UserPosts";

function App() {
  const sidebarPathnames = ["/", "/messages", "/userposts"];
  const [query, setQuery] = useState("");
  const location = useLocation();

  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="content-container">
          <aside>
            {sidebarPathnames.includes(location.pathname) ? (
              <Sidebar query={query} setQuery={setQuery} />
            ) : null}
          </aside>
          <main>
            <Routes>
              <Route path="" element={<Posts query={query} />} />
              <Route path="newuser" element={<NewUser />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="messages" element={<Messages query={query} />} />
              <Route path="userposts" element={<UserPosts query={query} />} />
              <Route path="posts" element={<Posts />} />
              <Route path="*" element={<h2>Route not found</h2>} />
            </Routes>
          </main>
        </div>
        <div className="footer">
          {" "}
          <footer>footer</footer>
        </div>
      </div>

      {/*   
      <div id="content">


      </div> */}
    </>
  );
}

export default App;
