import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState(""); // Security answer field
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email || !answer || !newPassword) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/api/v1/auth/forgot-password", {
        email,
        answer,
        newPassword,
      });
      toast.success("Password reset successful!");
      navigate("/login");
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : "An error occurred. Please try again later.";
      setError(errorMessage);
    }
  };

  return (
    <Container maxWidth="xl">
      <Toaster />
      <div className="forgot-password-wrapper">
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6} className="forgot-password-form-container">
            <form onSubmit={handlePasswordReset}>
              <Typography variant="h5" align="center" gutterBottom>
                Reset Password
              </Typography>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <input
                placeholder="Security Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="input-field"
              />
              <input
                placeholder="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input-field"
              />
              {error && (
                <Typography color="error" align="center">
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                type="submit"
                fullWidth
                className="reset-button"
                sx={{ mt: 2 }}
              >
                Reset Password
              </Button>
              <Typography align="center" sx={{ mt: 2 }}>
                <Button
                  onClick={() => navigate("/login")}
                  sx={{ textTransform: "none", color: "primary.main" }}
                >
                  Back to Login
                </Button>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
