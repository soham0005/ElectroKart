import React, { useState, useEffect } from "react";
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
import Contact from './contact.jsx';
import '../styles/preloaderStyle.css'; 

const Home = () => {
  useEffect(()=>{
    let preloader = document.querySelector("div #preloader");

    window.addEventListener("load",function(e){

      preloader.style.display = "none";

    });
  },[]);
  const location = useLocation();

  return (
    <div>
      <div id="preloader">
        < div class="wrapper">
          <div class="box-wrap">
              <div class="box one"></div>
              <div class="box two"></div>
              <div class="box three"></div>
              <div class="box four"></div>
              <div class="box five"></div>
              <div class="box six"></div>
          </div>
        </div>
      </div>
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

      <Heading text={"Contact US"} />
      <Contact contact={data.contact} />

      <Footer footer={data.footer} />
      
    </div>
  )
}

export default Home
