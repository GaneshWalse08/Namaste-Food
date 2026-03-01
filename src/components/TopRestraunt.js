const TopRestraunt = (props) => {
  const {TopData} = props;

  const {areaName, avgRating, name, cuisines, sla, aggregatedDiscountInfoV3, cloudinaryImageId} = TopData;
  return (
    <div className="Top-rest-cont">
      <div className="top-rest-img-cont">
        <img className="top-rest-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
      </div>

      <div className="top-rest-info">
        <h3>{name}</h3>
        <h4>{avgRating} ⭐</h4>
        <h4>{sla?.slaString}</h4>
        <h5>{cuisines?.join(", ")}</h5>
        <h5>{areaName}</h5>
        
      </div>
    </div>


  )
}

export default TopRestraunt;