import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/ItemCard.css";

function ItemCard({ image, index, name, price, onWishlistUpdate }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if this item is in the wishlist when the component mounts
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const itemExists = wishlist.find((item) => item.name === name);
    if (itemExists) {
      setIsWishlisted(true);
    }
  }, [name]);

  // Toggle wishlist status
  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
      // Remove the item from the wishlist
      wishlist = wishlist.filter((item) => item.name !== name);
    } else {
      // Add the item to the wishlist
      wishlist.push({ image, name, price });
    }

    // Update localStorage and the state
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setIsWishlisted(!isWishlisted);

    // Call parent function to notify wishlist change
    if (onWishlistUpdate) {
      onWishlistUpdate();
    }
  };

  return (
    <div className="ItemCard">
      <img src={image} alt={`${index} product`} loading="lazy" />
      <p>{name}</p>
      <span>{price}</span>

      {/* Wishlist icon */}
      <div onClick={toggleWishlist} className="wishlist-icon">
        {isWishlisted ? (
          <AiFillHeart color="red" />
        ) : (
          <AiOutlineHeart color="black" />
        )}
      </div>
    </div>
  );
}

export default ItemCard;
