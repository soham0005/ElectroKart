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

const Home = () => {
  return (
    <div>
    <Slider start={data.banner.start} />
      <Offers offer = {data.offer} />
      <Heading text={"FEATURED"}/>
      <StarProducts starProduct={data.starProduct} />
      
      <Heading text={"ACCESSORIES"}/>
      <AccessoriesMenu/>

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