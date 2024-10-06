import React from "react";
import "../styles/ItemCard.css";

function ItemCard({ image, index, name, price }) {
  return (
    <div className="ItemCard">
      <img src={image} alt={`${index} product`} loading="lazy" />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

export default ItemCard;
