import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {

  const navigate = useNavigate();

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const logged = localStorage.getItem("loggedin");

  const check = () => {
    {
      if(logged){
        navigate("/checkout")
      }else{
         alert("Login before checkout!!!!");
        navigate("/login")
      }
    }
  };

  

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p> <h3>Subtotal: ${totalAmount} </h3></p>
          <button className="Btn" onClick={() => navigate("/")}> Continue Shopping </button>
          <button className="Btn"
            onClick={()=>check()}
            /* {(e) => {
              //checkout();
              navigate("/checkout");
            }} */
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
