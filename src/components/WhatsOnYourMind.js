import react from "react"

const WhatsOnYourMind = (props) => {
  const {MindData} = props;

  const {action, imageId} = MindData;
  return(
    <div className="mind-card">
      <div className="mind-card-img">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId}></img>
      </div>
      {/* <div className="mind-card-text">{action?.text}</div> */}
    </div>

  )
}

export default WhatsOnYourMind;