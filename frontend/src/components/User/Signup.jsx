import React, { useState } from "react";
import { Box, Container, Grid, IconButton, Typography, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Lottie from "lottie-react";
import loginAnimation from "../../Lottie-animation/loginAnimation.json";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "../../styles/Signup.css"; // Importing CSS

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(""); // State for phone number
  const [answer, setAnswer] = useState(""); // State for answer
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for all fields
    if (!name || !email || !password || !phone || !answer) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Phone number must be 10 digits

    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    try {
      console.log(name, email, password, phone, answer); // Log the answer field
      const response = await axios.post("http://localhost:3001/api/v1/auth/register", {
        name,
        email,
        password,
        phone, // Sending phone number as well
        answer, // Sending the answer field
      });
      console.log(response.data);
      toast.success("Registration successful!");
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAnswer(""); // Resetting answer field
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
    <Container maxWidth="xl">
      <Toaster />
      <div className="signup-wrapper">
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Lottie animationData={loginAnimation} style={{ height: "500px" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="signup-form-container">
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" align="center" gutterBottom>
                Register
              </Typography>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <input
                placeholder="Phone Number" // Phone Number field
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
              />
              <input
                placeholder="Answer" // New Answer field
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
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
                Register
              </Button>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Button
                  onClick={() => navigate("/login")}
                  sx={{ textTransform: "none", color: "primary.main" }}
                >
                  Login
                </Button>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SignupForm;
