import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const{resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId,
    );

    const json = await data.json();

    console.log(json);

    setresInfo(json?.data);
  };

  const { name, areaName, avgRating, cuisines, totalRatingsString, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{avgRating}⭐  -  {totalRatingsString}</h5>
      <h5>{areaName}</h5>
      <h5>{sla?.slaString}</h5>

      {itemCards.map((item) => (
        <li key={item.card.info.id}>
      {item.card.info.name} - ₹{item.card.info.price / 100}</li>
      ))}

    </div>
  );
};

export default RestrauntMenu;
