import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems ,addToWhislist} = useContext(ShopContext);

  const cartItemCount = cartItems[id];


  return (
    <div className="product">
      <img src={productImage}/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <div>
      <button className="Btn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <button className="Btn" onClick={() => addToWhislist(id)}>
        Add To Whislist
      </button>
      </div>
    </div>
  );
};
