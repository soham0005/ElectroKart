import React from "react";
import "../styles/StarProduct.css";

function StarProducts({ starProduct }) {
  return (
    <div className="starProduct">
      {starProduct.map((product, index) => (
        <a href={product.url} key={index}>
          <img src={product.image} alt={`Product ${index + 1}`} loading="lazy" />
        </a>
      ))}
    </div>
  );
}

export default StarProducts;
