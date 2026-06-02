import { useState } from "react";
import ItemsListAccordian from "./ItemsListAccordian";

const RestaurantMenuAccordian = ({ data, showItems, setshowItems }) => {

  const handleClick = () => {
    setshowItems();
  };
  return (
    <div>
      <div className="border border-gray-300 rounded-3xl p-6 shadow-lg shadow-gray-200 cursor-pointer hover:shadow-gray-300 font-bold">
        <div className="flex justify-between pb-3.5" onClick={handleClick}>
          <span>
            {data.card.card.title} ({data.card.card.itemCards.length})
          </span>{" "}
          <span>🔽</span>
        </div>
        <div>
          {showItems && (
            <ItemsListAccordian listItems={data?.card?.card?.itemCards} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuAccordian;
