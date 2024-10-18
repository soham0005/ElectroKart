import React from "react";
import ItemCard from "./ItemCard";
import "../styles/AccessoriesProduct.css";

function Accessories({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
          loading="lazy"
        />
      </div>

      {/* -----------2nd */}
      <div>
        {music &&
          music.map((item, index) => (
            <ItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {smartDevice &&
          smartDevice.map((item, index) => (
            <ItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {home &&
          home.map((item, index) => (
            <ItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <ItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <ItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        <div>
          <img
            src="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" // Replace with your actual image URL
            alt="Browse More"
            loading="lazy"
            style={{ width: "100%", height: "auto" }} // Adjust styles as needed
          />
        </div>
      </div>
    </div>
  );
}

export default Accessories;
