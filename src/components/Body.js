import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestraunt from "./TopRestraunt";

const Body = () => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [whatsOnYourMind, setwhatsOnYourMind] = useState([]);
  const [topRest, settopRest] = useState([]);

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

    setlistOfRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setwhatsOnYourMind(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info,
    );

    settopRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (!listOfRest || listOfRest.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="Whats-on-your-mind">
        <h2>What's on your mind?</h2>

        <div className="mind-container">
          {whatsOnYourMind.map((restraunt) => (
            <WhatsOnYourMind key={restraunt.id} MindData={restraunt} />
          ))}
        </div>
      </div>

      <div className="top-rest">
        <h2>Restaurants with online food delivery in Latur</h2>

        <div className="top-rest-cont">
          {topRest.map((restraunt) => (
            <TopRestraunt key={restraunt.info?.id} TopData={restraunt.info}/>
          ))}
        </div>
      </div>

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
