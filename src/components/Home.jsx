import React, { useEffect } from "react";
import Sidebar from "./Sidebar";

function Home() {

  const fetchPosts = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/posts`
    );
    const d = await response.json();
    console.log(d);
  };

  useEffect(() => {
    fetchPosts();

    return () => {};
  }, []);

  return (
  <div id = "home">
    <Sidebar/>
    <div>Home page for now -- replace this with the posts that have been fetched</div>
  </div>
  )
}

export default Home;