import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !newPassword) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/forgot-password",
        {
          email,
          newPassword,
        }
      );
      console.log(response.data);
      toast.success("Password reset successful");
      navigate("/login"); // Navigate to login page after successful reset
      setEmail("");
      setNewPassword("");
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
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Ensures the Box takes up full height of the grid item
                }}
              >
                <img
                  src="./frgtpass.svg"
                  height={450}
                  width={400}
                  alt="Reset your Password"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className="signin-form-container"
              sx={{ maxWidth: "500px", width: "100%" }} // Adjust form width here
            >
              <form onSubmit={handleSubmit}>
                <Typography variant="h5" align="center" gutterBottom>
                  Reset Password
                </Typography>
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  style={{ width: "100%" }} // Ensure input fields also take full width
                />
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    placeholder="New Password"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="input-field"
                    style={{ width: "100%" }} // Ensure input fields also take full width
                  />
                  <IconButton
                    onClick={togglePasswordVisibility}
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
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
                  Reset Password
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  className="register-button"
                  sx={{ mt: 2 }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                {/* <Typography align="center" sx={{ mt: 2 }}>
                  <a href="/login">Login here</a>
                </Typography> */}
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
