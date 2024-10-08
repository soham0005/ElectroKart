import React from 'react'
import StarProducts from './StarProducts';
import AccessoriesMenu from './AccessoriesMenu';
import Offers from '../components/OfferSection/Offers';
import Slider from './Slider.jsx';
import data from '../data/data.json'
import ProductReview from './ProductReview'
import Videos from './Videos.jsx';
import Banner from './Banner.jsx';
import Footer from './Footer.jsx';
import Heading from './Heading.jsx';
import { useLocation } from 'react-router-dom';
import Accessories from './Accessories.jsx';

const Home = () => {

  const location = useLocation();

  return (
    <div>
    <Slider start={data.banner.start} />
      <Offers offer = {data.offer} />
      <Heading text={"FEATURED"}/>
      <StarProducts starProduct={data.starProduct} />
     
      <Heading text={"ACCESSORIES"}/>
      <AccessoriesMenu/>

      {location.pathname === "/music" && (
        <Accessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      )}
      {location.pathname === "/smartDevices" && (
        <Accessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
      )}
      {location.pathname === "/home" && (
        <Accessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
      )}
      {location.pathname === "/lifestyle" && (
        <Accessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
      )}
      {location.pathname === "/mobileAccessories" && (
        <Accessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
      )}

      <Heading text={"PRODUCT REVIEW"} />
      <ProductReview productReviews={data.productReviews}/>

      <Heading text={"VIDEOS"} />
      <Videos videos={data.videos} />
    
      <Heading text={"IN THE PRESS"} />
      <Banner  banner={data.banner}/>

      <Footer footer={data.footer} />

    </div>
  )
}

export default Home
