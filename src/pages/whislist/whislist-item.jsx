import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const WhislistItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { removeFromWhislist, addToCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>

        {
          <div>
            <button className="Btn" onClick={() => addToCart(id)}> Add to Cart</button>
            <button className="Btn" onClick={() => removeFromWhislist(id)}> Remove</button>
          </div>
        }
      </div>
    </div>
  );
};
