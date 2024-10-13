"use client";
import React, { useState } from "react";
import { Box, Container, Grid, IconButton, Typography, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Lottie from "lottie-react";
import loginAnimation from "../../Lottie-animation/loginAnimation.json";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "../../styles/Login.css"; // Importing CSS

const SignInPage = () => {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post(`${URL}/api/v1/auth/login`, {
        email,
        password,
      });
      console.log(response.data);
      toast.success("Login successful");
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Navigate to the desired route after successful login
      setEmail("");
      setPassword("");
      setError("");
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : "An error occurred. Please try again later.";
      setError(errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Toaster />
        <div className="signin-wrapper">
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Lottie animationData={loginAnimation} style={{ height: "500px" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className="signin-form-container">
              <form onSubmit={handleSubmit}>
                <Typography variant="h5" align="center" gutterBottom>
                  Sign In
                </Typography>
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                  />
                  <IconButton
                    onClick={togglePasswordVisibility}
                    sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </Box>
                {error && (
                  <Typography color="error" align="center">
                    {error}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  className="register-button"
                  sx={{ mt: 2 }}
                >
                  Sign In
                </Button>
                <Typography align="center" sx={{ mt: 2 }}>
                  Already have an account? <a href="/register">Register here</a>
                </Typography>
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default SignInPage;