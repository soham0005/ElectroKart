"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Lottie from "lottie-react";
import loginAnimation from "../../Lottie-animation/loginAnimation.json";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css"; 
import '../../styles/preloaderStyle.css'; 

const SignInPage = () => {
  useEffect(()=>{
    let preloader = document.querySelector("div #preloader");

    window.addEventListener("load",function(e){

      preloader.style.display = "none";

    });
  },[]);

  const URL = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);

    try {

      const response = await axios.post("http://localhost:3000/login", {

      const response = await axios.post(`${URL}/api/v1/auth/login`, {

        email,
        password,
      });
      toast.success("Login successful");
      localStorage.setItem("token", response.data.token);
      navigate("/");
      setEmail("");
      setPassword("");
      setError("");
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : "An error occurred. Please try again later.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (platform) => {
    toast.info(`${platform} login coming soon!`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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
      <Container maxWidth="xl" sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <Toaster />
        <Grid container sx={{ height: "100%" }}>
          
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="animation-container">
              <Lottie animationData={loginAnimation} style={{ height: "500px"}} />
            </Box>
          </Grid>

          
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 4,
            }}
          >
            <Box>
              <Typography variant="h4" gutterBottom align="center">
                Welcome Back!
              </Typography>
              <Typography variant="body1" gutterBottom align="center" color="textSecondary">
                Please sign in to your account
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  error={!!error}
                  helperText={error ? "Invalid email or password." : ""}
                />
                <Box sx={{ position: "relative", display: "flex" }}>
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    error={!!error}
                  />
                  <IconButton
                    onClick={togglePasswordVisibility}
                    sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </Box>

                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  className="login-button"
                  sx={{ mt: 2 }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Sign In"}
                </Button>

                <Button
                  variant="contained"
                  type="button"
                  fullWidth
                  className="register-button"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                  sx={{ mt: 2 }}
                >
                  Forgot Password
                </Button>
                <Typography align="center" sx={{ mt: 2 }}>
                  Don't have an account? <a href="/register">Register here</a>
                </Typography>

                <Divider sx={{ my: 3 }}>or sign in with</Divider>

                
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="outlined"
                      startIcon={<GoogleIcon />}
                      onClick={() => handleSocialLogin("Google")}
                      sx={{ minWidth: "150px" }}
                    >
                      Google
                    </Button>
                  </Grid>
                </Grid>
                <Typography align="center" sx={{ mt: 3 }}>
                  New to ElectroKart?{" "}
                  <a href="/register" className="link">
                    Register here
                  </a>

                </Typography>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>

      
      <Box
        className="background-animation"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </>
  );
};

export default SignInPage;
