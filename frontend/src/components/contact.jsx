import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import toast
import "../styles/contact.css";
import "react-toastify/dist/ReactToastify.css";
import { apiConnector } from "../services/apiConnector";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const CONTACT_US_API = process.env.REACT_APP_API_URL + "/contact";

    // const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email || !message || !subject) {
            toast.error("Please enter all information");
            return;
        }
        console.log("Frontend submit called....")
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        console.log(data)

		try {
			setLoading(true);
			const res = await apiConnector(
				"POST",
				CONTACT_US_API,
				data
			);
			toast.success("Message sent successfully!");
            console.log("Email Res - ", res);
            
		} catch (error) {
            console.log("ERROR MESSAGE - ", error.message);
            toast.error("Please try again!");
			setLoading(false);
        }
        setLoading(false);
        setEmail("");
        setName("");
        setMessage("");
        setSubject("");
        console.log("called")
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">How can we help you ?</h3>
                    <p className="contact__details">
                        Customer satisfaction is our priority
                    </p>
                </div>

                <form onSubmit={onSubmit} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                className="contact__form-input"
                                placeholder="Insert your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                className="contact__form-input"
                                placeholder="Insert your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            name="subject"
                            value={subject}
                            placeholder="Insert your subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            value={message}
                            className="contact__form-input"
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button disabled={loading} type="submit" className="btn">
                        {"Send Message"}
                    </button>
                </form>

                <ToastContainer position="top-right"  />
            </div>
        </section>
    );
};

export default Contact;
