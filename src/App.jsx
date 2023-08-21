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
import RouteAuthorization from "./components/Access/RouteAuthorization";

function App() {
  const sidebarPathnames = ["/", "/messages", "/userposts", "/postcreator"];
  const [query, setQuery] = useState("");
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="contianer">
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
              <Route element={<RouteAuthorization token={token} />}>
                <Route path="messages" element={<Messages query={query} />} />
                {/* <Route path="userposts" element={<UserPosts query={query} />} /> */}
                <Route path="userposts" element={<Selling />} />
                <Route path="postcreator" element={<NewSelling />} />
                <Route path="makeposts" element={<MakePost />} />
                <Route path="Messages" element={<Navbar />} />
                <Route path="My posts" element={<Navbar />} />
                <Route path="All Listings" element={<Navbar />} />
              </Route>
              <Route path="*" element={<h2>Route not found</h2>} />
            </Routes>
          </main>
        </div>
        <div className="footer">
          <footer></footer>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
}
export default App;
