import { useState, useEffect } from "react";
import { RestaurantMenuAPI } from "./constants";

const useRestaurantMenu = (resId) =>{
  const[resMenu , setresMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch(RestaurantMenuAPI + resId);
    const json = await data.json();


    setresMenu(json?.data);
  }

  return resMenu;
}

export default useRestaurantMenu;