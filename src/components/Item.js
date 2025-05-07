import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  
  const cartClass = inCart ?  "in-cart" : "" 
  const handleCart = () => {
    setInCart(prev => !prev)
  }
  return (
    // <li className="">
      <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* <button className="add">Add to Cart</button> */}
      <button className="add" onClick={handleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
