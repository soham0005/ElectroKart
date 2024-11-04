import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Lottie from "lottie-react";
import loginAnimation from "../../Lottie-animation/loginAnimation.json";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "../../styles/Signup.css"; 
import '../../styles/preloaderStyle.css'; 

const SignupForm = () => {
  useEffect(()=>{
    let preloader = document.querySelector("div #preloader");

    window.addEventListener("load",function(e){

      preloader.style.display = "none";

    });
  },[]);
  const URL = process.env.REACT_APP_API_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).+$/;

    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    if (password.length < 8) {
      setError("Password Length must be 8");
      return;
    }

    if (!passRegex.test(password)) {
      setError("Password must contain at least one uppercase, one lowercase, one special character!");
      return;
    }

    try {
      const response = await axios.post(`${URL}/api/auth/register`, {
        name,
        email,
        password,
        phone,
      });
      toast.success("Registration successful!");
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
      <Container maxWidth="lg">
        <Toaster />
        <div className="signup-wrapper">
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: { xs: "none", md: "block" }, justifyContent: "center" }}>
                <Lottie animationData={loginAnimation} style={{ height: "500px" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className="signup-form-container">
              <Box component="form" onSubmit={handleSubmit} sx={{ p: 4, bgcolor: "#fff", borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                  Create Your Account
                </Typography>

                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  error={Boolean(error && !name)}
                  helperText={error && !name ? "Name is required" : ""}
                  sx={{ borderRadius: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  error={Boolean(error && !email)}
                  helperText={error && !email ? "Invalid email" : ""}
                  sx={{ borderRadius: 2 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  margin="normal"
                  error={Boolean(error && !phone)}
                  helperText={error && !phone ? "Invalid phone number" : ""}
                  sx={{ borderRadius: 2 }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  error={Boolean(error && !password)}
                  helperText={error && !password ? "Invalid password" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ borderRadius: 2 }}
                />

                {error && (
                  <Typography color="error" align="center" sx={{ mt: 2 }}>
                    {error}
                  </Typography>
                )}

                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{
                    mt: 3,
                    bgcolor: "linear-gradient(90deg, #36d1dc 0%, #5b86e5 100%)",
                    color: "#fff",
                    padding: "12px 0",
                    borderRadius: 2,
                    fontSize: "16px",
                  }}
                >
                  Register
                </Button>

                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                  Already have an account?{" "}
                  <Button
                    onClick={() => navigate("/login")}
                    sx={{ textTransform: "none", color: "#5b86e5" }}
                  >
                    Login
                  </Button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default SignupForm;
