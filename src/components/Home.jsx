import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import useApi from "../hooks/useApi";

function Home() {
  const { loading, data, errors } = useApi(
    `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/2305-FTB-MT-WEB-PT/posts`
  );
  console.log(loading, data, errors);

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