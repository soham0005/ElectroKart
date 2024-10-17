import React from "react";
import { Routes, Route } from "react-router-dom";

import data from "../data/data.json";
import Accessories from "./Accessories";
import Login from "./User/Login.jsx";
import Home from "./Home.jsx";
import UserLogin from "./Userlogin.jsx";
import FAQs from "./FAQ-feature/FAQ.jsx";
import SignInPage from "./User/Login.jsx";
import SignupForm from "./User/Signup.jsx";
import ForgotPassword from "./User/ForgotPassword.jsx";

import Home from './Home.jsx';
import FAQs from './FAQ-feature/FAQ.jsx';
import SignInPage from './User/Login.jsx';
import SignupForm from './User/Signup.jsx';
import Page404 from './page404.jsx';


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/FAQs" element={<FAQs />} />

        <Route exact path="/register" element={<SignupForm />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route
          exact
          path="/music"
          element={
            <Accessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevices"
          element={
            <Accessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Accessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <Accessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <Accessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />

        <Route exact path='/register' element={<SignupForm/>} />
        <Route exact path="/login" element={<SignInPage/>} />
        <Route exact path="/music" element={<Home />} />
        <Route exact path="/smartDevices" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/lifestyle" element={<Home />} />
        <Route exact path="/mobileAccessories" element={<Home />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
