const express = require("express");
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} = require("../controllers/authController.js");

const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware.js");

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//forgot Password
router.post('/forgot-password', forgotPasswordController);

module.exports = router;
