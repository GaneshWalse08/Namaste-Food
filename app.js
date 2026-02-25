import React from "react";
import ReactDOM from "react-dom/client";

/*

Header
  - App logo
  - Nav Links

Body
  - Search
  - Restraunt Container
    - Restraunt Cards

Footer
 - Copyright
 - Links
 - Address
 - Contact


*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/premium-vector/food-delivery-motorcycle-with-box_461522-22.jpg?semt=ais_user_personalization&w=740&q=80"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestrauntCard = () => {
  return (
    <div className="res-card">
      <div className="res-image">
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/03e63bc6-cde8-4ca3-9523-aae02e37fb30_1165722.JPG"></img>
      </div>

      <div className="res-info">
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Veg</h4>
        <h4>4.4 star</h4>
        <h4>38 minutes</h4>
        
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />

      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)