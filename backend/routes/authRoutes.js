const express = require("express");
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  otpController,
  otpVerifyController,
} = require("../controllers/authController.js");

const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware.js");

//authRouter object
const authRouter = express.Router();

//routing

//REGISTER || METHOD POST
authRouter.post("/auth/register", registerController);

//LOGIN || POST
authRouter.post("/auth/login", loginController);

//LOGIN || OTP || POST 
authRouter.post("/auth/login/otp", otpController);

//LOGIN || OTP || Verify || POST 
authRouter.post("/auth/login/otp/verify", otpVerifyController);
//test routes
authRouter.get("/test", requireSignIn, isAdmin, testController);

//protected route user
authRouter.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route admin
authRouter.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//forgot Password
authRouter.post('/forgot-password', forgotPasswordController);

//update profile
authRouter.put('/profile',requireSignIn, updateProfileController);

module.exports = authRouter;
