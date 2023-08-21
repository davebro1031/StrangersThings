import React, { useEffect, useState } from "react";

const imageArray = [
  "https://picsum.photos/id/135/2560/1920",
  "https://picsum.photos/id/134/4928/3264",
  "https://picsum.photos/id/103/2592/1936",
  "https://picsum.photos/id/145/4288/2848",
  "https://picsum.photos/id/107/5000/3333",
  "https://picsum.photos/id/169/2500/1662",
  "https://picsum.photos/id/186/2048/1275",
  "https://picsum.photos/id/206/2880/1800",
  "https://picsum.photos/id/203/4032/3024",
  "https://picsum.photos/id/202/2392/1260",
  "https://picsum.photos/id/180/2400/1600",
  "https://picsum.photos/id/170/2500/1667",
  "https://picsum.photos/id/154/3264/2176",
];

export const useRandomPicture = () => {
  const [data, setData] = useState(null);

  const randomImage = () => {
    setData(imageArray[Math.floor(Math.random() * imageArray.length)]);
  };
  useEffect(() => {
    randomImage();
  }, []);

  return { data };
};
export default useRandomPicture;
