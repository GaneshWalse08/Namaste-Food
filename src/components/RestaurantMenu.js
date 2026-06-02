import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuAccordian from "./RestaurantMenuAccordian";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  const [showItems, setshowItems] = useState(0);

  if (resMenu === null) {
    return <h1>Loading...</h1>;
  }

  const { name, avgRating, costForTwo, cuisines, id, locality, sla } =
    resMenu?.cards?.[2].card?.card?.info;
  const { itemCards } =
    resMenu?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card
      ?.card;

  const categeories =
    resMenu?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="w-8/12 mx-auto my-8">
      <div className="py-6">
        <h1 className="text-4xl font-bold pb-5">{name}</h1>
        <div className="border border-gray-300 rounded-3xl p-6 shadow-lg shadow-gray-200">
          {/* Rating + Cost */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="bg-green-700 text-white px-2 py-1 rounded-full text-sm">
              ★
            </span>
            <span>{avgRating}</span>
            <span className="text-gray-400">•</span>
            <span>{costForTwo}</span>
          </div>

          {/* Cuisines */}
          <h3 className="text-orange-600 font-semibold underline mt-3">
            {cuisines.join(", ")}
          </h3>

          {/* Outlet + Time */}
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="font-bold">Outlet</span>
              <span className="text-gray-600">{locality}</span>
            </div>

            <div className="w-[2px] h-6 bg-gray-300 ml-[5px]"></div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="font-bold">{sla.slaString}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="menu mt-8">
        {categeories.map((categeory, index) => (
          <RestaurantMenuAccordian
            key={categeory.card.card.title}
            data={categeory}
            showItems={index === showItems ? true : false}
            setshowItems={() =>
              setshowItems(showItems === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
