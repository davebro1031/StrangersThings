import React, { useEffect } from "react";

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

  return <div>Home page for now -- replace this with the posts that have been fetched</div>
}

export default Home;