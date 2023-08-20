import React, { useState, useEffect } from "react";
import SellingTable from "./SellingTable";

export const Selling = () => {
  const [mySellingPosts, setMySellingPosts] = useState({});
  const myPosts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_STRANGERS_THINGS_BASE_API}/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      setMySellingPosts(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    myPosts();

    return () => {};
  }, []);

  return (
    <>
      {console.log(mySellingPosts)}
      {mySellingPosts ? (
        <SellingTable {...mySellingPosts} />
      ) : (
        "You are not selling anything"
      )}
    </>
  );
};
export default Selling;
