import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import "../styles/wishlist.css";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist items from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedItems);
  }, []);

  // Function to refresh wishlist items
  const refreshWishlist = () => {
    const storedItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedItems);
  };

  return (
    <div className="Wishlist">
      <h1>Your Wishlist</h1>
      <p className="wishlist-count">
        {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} in
        your list
      </p>
      {wishlistItems.length === 0 ? (
        <p>oops nothing to show!</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item, index) => (
            <ItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
              onWishlistUpdate={refreshWishlist} // Callback to update wishlist
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
