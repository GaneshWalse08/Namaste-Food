import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestraunt from "./TopRestraunt";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [filteredRestraunt, setfilteredRestraunt] = useState([]);
  const [whatsOnYourMind, setwhatsOnYourMind] = useState([]);
  const [topRest, settopRest] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // const fetchData = async () => {
  //   console.log("fetch started");
  //   // const data = await fetch(
  //   //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4091747&lng=76.5603184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   // );

  //   // const data = await fetch(
  //   //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4690213&lng=73.8640944&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   // );

  //   fetch("https://namastedev.com/api/v1/listRestaurants")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const restaurants =
  //         data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  //       console.log(restaurants);
  //     })
  //     .catch((error) => console.error("Error:", error));

  //   setfilteredRestraunt(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants,
  //   );

  //   // setwhatsOnYourMind(
  //   //   json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [],
  //   // );

  //   // settopRest(
  //   //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //   //     ?.restaurants || [],
  //   // );
  // };

  // if (!listOfRest || listOfRest.length === 0) {
  //   return <Shimmer />;
  // }

  const fetchRestaurants = async () => {
    // const response = await fetch(
    //   "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api",
    // );

    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );

    const json = await response.json();
    // const restaurantData =
    //   json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;

    const restaurantData =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(json);
    setlistOfRest(restaurantData || []);
    setfilteredRestraunt(restaurantData || []);

    //     const fdata = await fetch(
    //     "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurantMenu/123456"
    //         );

    //  const fjson = await fdata.json();
    //  console.log(fjson);
  };

  const isLoading = listOfRest.length === 0;

  return (
    <div className="body">
      {/* <div className="Whats-on-your-mind">
        <h2>What's on your mind?</h2> */}

      {/* <div className="mind-container">

          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <div className="shimmer-card-mind" key={index}></div>
              ))
            : whatsOnYourMind?.map((restraunt) => (
                <WhatsOnYourMind key={restraunt.id} MindData={restraunt} />
              ))}
        </div>
      </div> */}
      {/* 
      <div className="top-rest">
        <h2>Restaurants with online food delivery in Latur</h2>

        <div className="top-rest-cont">
          {topRest.map((restraunt) => (
            <TopRestraunt key={restraunt.info?.id} TopData={restraunt.info} />
          ))}
        </div>
      </div> */}

      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>

          <button
            className="search-btn"
            onClick={() => {
              const filteredRest = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setfilteredRestraunt(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRest = listOfRest.filter(
              (rest) => rest.info.avgRating > 4.2,
            );
            // setlistOfRest(filteredRest);
            setfilteredRestraunt(filteredRest);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>

      <div className="res-container">
        {filteredRestraunt.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}><RestrauntCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
