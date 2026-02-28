import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRest, setlistOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetch started");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4091747&lng=76.5603184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    console.log("fetch finished");
    const json = await data.json();

    console.log(json);
    
    setlistOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(!listOfRest || listOfRest.length === 0){
    return (<Shimmer />)
  }

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredRest = listOfRest.filter(
            (rest) => rest.info.avgRating > 4.2,
          );
          setlistOfRest(filteredRest);
        }}
      >
        Top Rated Restraunt
      </button>

      <div className="res-container">
        {listOfRest.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
