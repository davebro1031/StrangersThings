import React, { useState, useEffect } from "react";
import SellingTable from "./SellingTable";

export const Selling = () => {
  const [mySellingPosts, setMySellingPosts] = useState([]);
  const [sortType, setSortType] = useState("Ascending");

  const sortArray = (array, sortDirection) => {
    return array.posts.sort(function (a, b) {
      switch (sortDirection) {
        case "desc":
          new Date(b.createdAt) - new Date(a.createdAt);
        case "asc":
          return new Date(a.createdAt) - new Date(b.createdAt);
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  };
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
      const sortedData = sortArray(result.data, "asc");
      setMySellingPosts(result.data);
    } catch (err) {
      console.error(err);
    }
  };
  const sortFunction = (array, sortOrder) => {
    setMySellingPosts(sortArray(array, sortOrder));
  };

  useEffect(() => {
    myPosts();

    return () => {};
  }, []);
  useEffect(() => {}, [sortType]);
  return (
    <>
      {console.log(mySellingPosts, "posts")}
      {mySellingPosts ? (
        <div>
          <p>sortingHeader</p>
          {/* <div style={{ display: "block" }}>
            {" "}
            <button
              style={{ width: "60px", height: "60px" }}
              onClick={() => {
                sortFunction(mySellingPosts, "asc");
              }}
            >
              ASC
            </button>{" "}
            <button
              style={{ width: "60px", height: "60px" }}
              onClick={() => {
                sortFunction(mySellingPosts, "desc");
              }}
            >
              DESC
            </button>
          </div> */}
          {}
          <SellingTable {...mySellingPosts} />
        </div>
      ) : (
        "You are not selling anything"
      )}
    </>
  );
};
export default Selling;
