import React, { useState } from 'react';
import '../../styles/FAQ.css'; // Import your CSS

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

    const faqs = [
        { question: "What warranty does Xiaomi offer on its products?", answer: "Xiaomi typically offers a one-year warranty on most of its devices. However, warranty terms may vary depending on the product and region, so it’s best to check the specific warranty policy for your item." },
        { question: "How do I update the software on my Xiaomi device?", answer: "You can update your Xiaomi device by going to Settings > About phone > System update. If an update is available, follow the prompts to download and install it." },
        { question: "What should I do if my Xiaomi phone is running slow?", answer: "To improve performance, try clearing app caches, uninstalling unused apps, disabling unnecessary background services, or restarting your device." },
        { question: "How can I extend the battery life of my Xiaomi smartphone?", answer: "To maximize battery life, enable battery saver mode, reduce screen brightness, turn off location services, and use Dark Mode." },
        { question: "Does Xiaomi provide a user manual for its devices?", answer: "Yes, Xiaomi provides user manuals for most of its devices. You can find a PDF version on the official Xiaomi website." },
        { question: "How do I transfer data from my old phone to my new Xiaomi phone?", answer: "You can use the Mi Mover app to easily transfer data. Download the Mi Mover app on both devices and follow the instructions." },
        { question: "How do I reset my Xiaomi phone to factory settings?", answer: "To factory reset your Xiaomi phone, go to Settings > About phone > Factory reset. Remember to back up important data first." },
        { question: "What are the best ways to contact Xiaomi customer support?", answer: "You can contact Xiaomi customer support through their official website, customer support app, or by visiting a local Xiaomi service center." },
        { question: "How do I enable developer options on my Xiaomi device?", answer: "To enable developer options, go to Settings > About phone and tap the MIUI version seven times." },
        { question: "Are Xiaomi devices compatible with third-party accessories?", answer: "Many Xiaomi devices are compatible with third-party accessories, but it’s recommended to check compatibility before purchasing." },
        // Add more FAQs as needed
    ];

    const filteredFAQs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    ); // Filter FAQs based on search query

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="background-blur"></div>
            <header style={{backgroundColor:"red"}}></header>

            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="fas fa-search"></i> {/* Search icon */}
                </div>

                <div className="faq-list">
                    {/* Conditional rendering: if no results, display a message */}
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div
                                    className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAnswer(index)}
                                >
                                    {faq.question}
                                </div>
                                {activeIndex === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="no-results">No results found!</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
