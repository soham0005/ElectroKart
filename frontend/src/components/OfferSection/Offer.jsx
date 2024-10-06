import React from "react";

function Offer({ index, src, link }) {
  return (
    <a href={link}>
      {" "}
      <img
        className="offerImage"
        src={src}
        alt={`${index} Offer`}
        loading="lazy"
      />
    </a>
  );
}

export default Offer;
