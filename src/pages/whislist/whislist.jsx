import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "../cart/cart-item";
import "./whislist.css";
import { useNavigate } from "react-router-dom";
import { WhislistItem } from "./whislist-item";

import "../cart/cart.css";
export const Whislist = () => {
  const { whislistItems} = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Whislist Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (whislistItems[product.id] !== 0) {
            return <WhislistItem data={product} />;
          }
        })
        }
        
      </div>
      <div>
        <button className="Btn" onClick={()=>navigate("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};
