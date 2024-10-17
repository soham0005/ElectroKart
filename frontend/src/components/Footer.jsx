/** @format */

import React, { useState } from "react";
import "../styles/Footer.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer({ footer }) {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				{
					to_email: email,
				},
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					setLoading(false);
					toast("message successfully sent");
				},
				(error) => {
					toast("error occured");
				}
			);

		setEmail("");
	};

	return (
		<footer className="footer">
			<div className="footer-content">
				{/* Support */}
				<div className="footer-section">
					<h3 style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}>
						Support
					</h3>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
						{footer.support.map((item, index) => (
							<a
								key={item.url}
								href={item.url}
								style={{ color: "rgb(204, 202, 202)" }}>
								{item.name}
							</a>
						))}
					</div>
				</div>

				{/* about us */}
				<div className="footer-section">
					<h3 style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}>
						About Us
					</h3>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
						{footer.aboutUS.map((item, index) => (
							<a
								key={item.url}
								href={item.url}
								style={{ color: "rgb(204, 202, 202)" }}>
								{item.name}
							</a>
						))}
					</div>
				</div>

				<div className="footer-section">
					<h3 style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}>
						Contact Us
					</h3>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}>
						{footer.contactUs.map((item, index) => (
							<a
								key={item.url}
								href={item.url}
								style={{ color: "rgb(204, 202, 202)" }}>
								{item.name}
							</a>
						))}
					</div>
					<div style={{ marginTop: "20px" }}>
						<div className="subscribe-input">
							<input
								type="email"
								name="email"
								style={{
									outline: "none",
									padding: "8px 10px",
									borderRadius: "4px",
									backgroundColor: "rgb(204, 202, 202)",
									border: "2px solid #5f2727",
								}}
								value={email}
								placeholder="Enter Email Address"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<button
								onClick={handleSubmit}
								style={{
									default: "none",
									padding: "6px 10px",
									marginTop: "10px",
									backgroundColor: "#fa4d4d",
									borderRadius: "5px",
									fontWeight: "bolder",
									color: "white",
								}}>
								{loading ? "Subscribing..." : "Subscribe"}
							</button>
						</div>
						<div style={{ color: "rgb(204, 202, 202)", marginTop: "30px" }}>
							Thanks. You're on our email list for special offers.
						</div>
						<ToastContainer />
					</div>
				</div>

				<div className="footer-section">
					<h3 style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}>
						Follow Us
					</h3>
					<div className="social-icons">
						<a
							href="https://www.instagram.com"
              id="instagram"
							target="_blank"
							rel="noopener noreferrer">
							<FaInstagram />
						</a>
						<a
							href="https://www.linkedin.com"
              id="linkedin"
							target="_blank"
							rel="noopener noreferrer">
							<FaLinkedin />
						</a>
						<a
							href="https://www.twitter.com"
              id="twitter"
							target="_blank"
							rel="noopener noreferrer">
							<FaXTwitter />
						</a>
						<a
							href="https://github.com/soham0005/ElectroKart"
              id="github"
							target="_blank"
							rel="noopener noreferrer">
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
