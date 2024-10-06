import React from "react";
import "../styles/StarProduct.css";

function StarProducts({ starProduct }) {
  return (
    <div className="starProduct">
      <div>
        {" "}
        <a href={starProduct[0].url}>
          {" "}
          <img src={starProduct[0].image} alt="1st Product" loading="lazy" />
        </a>
      </div>
      <div>
        <a href={starProduct[1].url}>
          {" "}
          <img src={starProduct[1].image} alt="1st Product" loading="lazy" />
        </a>
        <a href={starProduct[2].url}>
          {" "}
          <img src={starProduct[2].image} alt="1st Product" loading="lazy" />
        </a>
        <a href={starProduct[3].url}>
          {" "}
          <img src={starProduct[3].image} alt="1st Product" loading="lazy" />
        </a>
      </div>
    </div>
  );
}

export default StarProducts;
