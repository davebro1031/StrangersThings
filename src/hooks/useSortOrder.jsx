import React, { useEffect, useState } from "react";

export const useSortOrder = (array, sortDirection) => {
  const [sortedArray, setSortedArray] = useState(null);

  const sortArray = () => {
    return array.sort(function (a, b) {
      switch (sortOrder) {
        case "desc":
          new Date(b.createdAt) - new Date(a.createdAt);
        case "asc":
          return -new Date(a.createdAt) - new Date(b.createdAt);
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  };
  useEffect(() => {
    sortArray();
  }, []);

  return { sortArray };
};
export default useSortOrder;
