import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRest, setlistOfRest] = useState(resList);
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
