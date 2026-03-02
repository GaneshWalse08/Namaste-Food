const Shimmer = () => {
  return(
    <div className="shimmer-cont">

      {/* {Array.from({length:10}).map((_, index) => (
        <div className="shimmer-card-mind" key={index}></div>
      ))} */}

      {Array.from({length: 10}).map((_ , index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  )
}

export default Shimmer;