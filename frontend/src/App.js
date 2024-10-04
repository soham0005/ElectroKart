import './App.css';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/OfferSection/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import AccessoriesMenu from './components/AccessoriesMenu';
import Accessories from './components/Accessories';
import ProductReview from './components/ProductReview';
import Videos from './components/Videos.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import UserLogin from './components/Userlogin.jsx';

function App() {
  return (
    <Router>
      <PreNavbar />
      
      {/* Define the routes first */}
      <Routes>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/music" element={<Accessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route path="/smartDevices" element={<Accessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route path="/home" element={<Accessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route path="/lifestyle" element={<Accessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route path="/mobileAccessories" element={<Accessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
        
        {/* Default route (homepage-like components) */}
        <Route 
          path="/" 
          element={
            <>
              <Slider start={data.banner.start} />
              <Offers offer={data.offer} />
              <Heading text={"FEATURED"} />
              <StarProducts starProduct={data.starProduct} />
              <Heading text={"ACCESSORIES"} />
              <AccessoriesMenu />
              <Heading text={"PRODUCT REVIEW"} />
              <ProductReview productReviews={data.productReviews} />
              <Heading text={"VIDEOS"} />
              <Videos videos={data.videos} />
              <Heading text={"IN THE PRESS"} />
              <Banner banner={data.banner} />
            </>
          } 
        />
      </Routes>

      {/* Common components like Footer go outside the Routes */}
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
