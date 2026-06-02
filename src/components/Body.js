import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchData from "../utils/useFetchData";
import { vegNonveg } from "./ResCard";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const { allRestaurants, listOfRest, setlistOfRest } = useFetchData();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>You are Offline</h1>;

  const ResVegNonveg = vegNonveg(ResCard);

  return (
    <div className="body-cont">
      <div className="flex m-1 p-1 py-2.5 gap-4">
        <div className="top-rated-rest">
          <button
            className="border px-1 py-0.5 rounded-lg bg-orange-300 text-md cursor-pointer"
            onClick={() => {
              const topRest = allRestaurants.filter(
                (rest) => rest.info.avgRating >= 4.5,
              );
              setlistOfRest(topRest);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="flex gap-2">
          <input
            className="border rounded-md"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="border px-1 py-0.5 rounded-lg bg-orange-300 text-md cursor-pointer"
            onClick={() => {
              const filteredList = allRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.costForTwo
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.locality
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
              );

              setlistOfRest(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {listOfRest.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? <ResCard resData={restaurant} /> : <ResVegNonveg resData={restaurant}/>}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
