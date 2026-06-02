import { useState, useEffect } from "react";

const useFetchData = () => {
  const [allRestaurants, setallRestaurants] = useState([]);
  const [listOfRest, setlistOfRest] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();


    const restaurantList =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setallRestaurants(restaurantList);
    setlistOfRest(restaurantList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {allRestaurants, listOfRest, setlistOfRest};
}

export default useFetchData;