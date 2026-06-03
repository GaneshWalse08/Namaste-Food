import { useContext, useState } from "react";
import { logoImg } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import {auth} from "../utils/firebase"
import { useLocation } from "react-router-dom";

const Header = () => {
  const [reactBtn, setreactBtn] = useState("LogIn");
  const location = useLocation();

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  if(location.pathname === "/login"){
    return(
      <div className=" flex p-1.5 justify-between items-center border rounded-lg bg-amber-100 my-3.5-">
      <div className="logo-cont">
        <img className="w-20 rounded-b-md" src={logoImg}></img>
      </div>

      <div className="nav-cont">
        <ul className="flex gap-5 cursor-pointer font-normal text-lg p-1">
          <li className="nav-link">
            {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className="mr-2">Hello {auth.currentUser?.displayName || "User"} 👋</li>
        </ul>
      </div>
    </div>
    )
  }

  return (
    <div className=" flex p-1.5 justify-between items-center border rounded-lg bg-amber-100 my-3.5-">
      <div className="logo-cont">
        <img className="w-20 rounded-b-md" src={logoImg}></img>
      </div>

      <div className="nav-cont">
        <ul className="flex gap-5 cursor-pointer font-normal text-lg p-1">
          <li className="nav-link">
            {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <button
              className="bg-blue-500 text-white px-3.5 py-1.5 rounded-lg cursor-pointer"
              onClick={() => {
                {
                  reactBtn === "LogIn"
                    ? setreactBtn("LogOut")
                    : setreactBtn("LogIn");
                }
              }}
            >
              {reactBtn}
            </button>
          </li>
          <li>{auth.currentUser?.displayName || "User"} 👋</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
