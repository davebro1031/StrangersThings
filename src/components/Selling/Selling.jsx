import React, { useState, useEffect } from "react";
import SellingTable from "./SellingTable";

export const Selling = () => {
  const [mySellingPosts, setMySellingPosts] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [sortedPosts, setSortedPosts] = useState([]);

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
      setSortedPosts(sortArray(result.data.posts, "desc"));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    myPosts();
    return () => {};
  }, []);
  const sortArray = (array, sortOrder) => {
    return array.sort(function (a, b) {
      if (sortOrder === "desc")
        return new Date(b.createdAt) - new Date(a.createdAt);
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  };
  const onChangeEvent = (e) => {
    setSortedPosts(sortArray([...mySellingPosts.posts], e.target.value));
  };
  return (
    <>
      {sortedPosts ? (
        <>
          <div style={{ display: "block" }}>
            Sort Post Date by:
            <select style={{ width: "200px" }} onChange={onChangeEvent}>
              <option value={"desc"}>Newest</option>
              <option value={"asc"}>Oldest</option>
            </select>
          </div>
          {sortedPosts && <SellingTable sortedPosts={sortedPosts} />}
        </>
      ) : (
        "You are not selling anything"
      )}
    </>
  );
};
export default Selling;
