import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { ShoppingCart,Heart } from "phosphor-react";
import "./navbar.css";


export const Navbar = () => {
  const navigate=useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const logged = localStorage.getItem("loggedin");
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedin");
    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <div></div>
        <div className="links">
          <Link to="/"> SHOP </Link>
          <Link to="/whislist">
          <Heart size={32} />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
          {logged ? (
            <Link onClick={handleLogout}>LOGOUT</Link>
          ) : (
            <Link to="/login"> LOGIN </Link>
          )};
          
        </div>
      </div>
    </>
  );
};
