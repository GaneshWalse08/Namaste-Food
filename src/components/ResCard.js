import { logoImg, ResCardImg } from "../utils/constants";

const ResCard = (props) => {

  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    id,
    locality,
    sla,
  } = props?.resData?.info;
  return (
    <div className="w-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white m-4">
      <div className="resCard-img">
        <img className="w-full" src={ResCardImg + cloudinaryImageId}></img>
      </div>

      <div className="p-4">
        <h1 className="text-xl font-bold truncate">{name}</h1>
        <h4 className="text-gray-600 text-sm mt-2 line-clamp-2">{cuisines.join(", ")}</h4>
         <div className="flex justify-between items-center mt-3">
        <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">{avgRating} ⭐ </span>
        <span className="text-gray-700 text-sm"> {sla.slaString}</span>
</div>
        <h4 className="mt-3 font-medium text-gray-800">{costForTwo}</h4>
        <h4 className="text-gray-500 text-sm mt-1 truncate">{locality}</h4>
      </div>
    </div>
  );
};


export const vegNonveg = (ResCard) => {
  return(props) =>{
    const {resData} = props;
    return(
      <div className="relative hover:shadow-2xl hover:scale-105 transition-all duration-300 ">
        <label className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-bold z-10 ">Non-Veg</label>
        <ResCard resData={resData}/>
      </div>
    )
  }
}

export default ResCard;
