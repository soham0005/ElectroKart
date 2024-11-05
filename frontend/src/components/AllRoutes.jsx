import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import FAQs from "./FAQ-feature/FAQ.jsx";
import SignInPage from "./User/Login.jsx";
import SignupForm from "./User/Signup.jsx";
import ForgotPassword from "./User/ForgotPassword.jsx";
import Page404 from "./page404.jsx";
import Wishlist from "./wishlist.jsx";
import Contributors from "./Contributors.jsx";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/music" element={<Home />} />
        <Route exact path="/smartDevices" element={<Home />} />
        <Route exact path="/lifestyle" element={<Home />} />
        <Route exact path="/mobileAccessories" element={<Home />} />
        <Route exact path="/lifestyle" element={<Home />} />

        <Route exact path="/register" element={<SignupForm />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route path="*" element={<Page404 />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/Contributors" element={<Contributors />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
