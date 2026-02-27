import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card">
      <div className="res-image">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>

      <div className="res-info">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestrauntCard;
