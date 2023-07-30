import './App.css';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/OfferSection/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import AccessoriesMenu from './components/AccessoriesMenu';
import Accessories from './components/Accessories';
import ProductReview from './components/ProductReview'
import Videos from './components/Videos.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <Router>
      <PreNavbar />
      <Slider start={data.banner.start} />
      <Offers offer = {data.offer} />
      <Heading text={"FEATURED"}/>
      <StarProducts starProduct={data.starProduct} />
      
      <Heading text={"ACCESSORIES"}/>
      <AccessoriesMenu/>

      <Routes>
        <Route exact path="/music" element={<Accessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

        <Route exact path="/smartDevices" element={<Accessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

        <Route exact path="/home" element={<Accessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />


        <Route exact path="/lifestyle" element={<Accessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />

        <Route exact path="/mobileAccessories" element={<Accessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text={"PRODUCT REVIEW"} />
      <ProductReview productReviews={data.productReviews}/>

      <Heading text={"VIDEOS"} />
      <Videos videos={data.videos} />

      <Heading text={"IN THE PRESS"} />
      <Banner  banner={data.banner}/>

      <Footer footer={data.footer} />


    </Router>
  );
}

export default App;
