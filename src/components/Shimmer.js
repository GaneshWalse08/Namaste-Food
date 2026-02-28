const Shimmer = () => {
  return(
    <div className="Shimmer-cont">

      {Array.from({length: 10}).map((_ , index) => (
        <div className="Shimmer-card" key={index}></div>
      ))}
    </div>
  )
}

export default Shimmer;