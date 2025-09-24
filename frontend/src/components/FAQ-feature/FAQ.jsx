// // import React, { useEffect, useState } from 'react';
// // import '../../styles/FAQ.css'; // Import your CSS
// // import '../../styles/preloaderStyle.css'; 

// // const FAQs = () => {
// //     const [activeIndex, setActiveIndex] = useState(null);
// //     const [searchQuery, setSearchQuery] = useState(''); // Add state for search query
// //     const [isLoading, setIsLoading] = useState(true);

// //     const faqs = [
// //         { question: "What warranty does Xiaomi offer on its products?", answer: "Xiaomi typically offers a one-year warranty on most of its devices. However, warranty terms may vary depending on the product and region, so it’s best to check the specific warranty policy for your item." },
// //         { question: "How do I update the software on my Xiaomi device?", answer: "You can update your Xiaomi device by going to Settings > About phone > System update. If an update is available, follow the prompts to download and install it." },
// //         { question: "What should I do if my Xiaomi phone is running slow?", answer: "To improve performance, try clearing app caches, uninstalling unused apps, disabling unnecessary background services, or restarting your device." },
// //         { question: "How can I extend the battery life of my Xiaomi smartphone?", answer: "To maximize battery life, enable battery saver mode, reduce screen brightness, turn off location services, and use Dark Mode." },
// //         { question: "Does Xiaomi provide a user manual for its devices?", answer: "Yes, Xiaomi provides user manuals for most of its devices. You can find a PDF version on the official Xiaomi website." },
// //         { question: "How do I transfer data from my old phone to my new Xiaomi phone?", answer: "You can use the Mi Mover app to easily transfer data. Download the Mi Mover app on both devices and follow the instructions." },
// //         { question: "How do I reset my Xiaomi phone to factory settings?", answer: "To factory reset your Xiaomi phone, go to Settings > About phone > Factory reset. Remember to back up important data first." },
// //         { question: "What are the best ways to contact Xiaomi customer support?", answer: "You can contact Xiaomi customer support through their official website, customer support app, or by visiting a local Xiaomi service center." },
// //         { question: "How do I enable developer options on my Xiaomi device?", answer: "To enable developer options, go to Settings > About phone and tap the MIUI version seven times." },
// //         { question: "Are Xiaomi devices compatible with third-party accessories?", answer: "Many Xiaomi devices are compatible with third-party accessories, but it’s recommended to check compatibility before purchasing." },
// //         { question: "What do I do if my Xiaomi phone gets stuck in boot loop or won’t start ?", answer: "Try force restarting by holding down the power button for 10-15 seconds. If it doesn’t work, boot into recovery mode by pressing the power and volume up buttons simultaneously, and perform a factory reset. If the problem persists, visit a service center ." },
// //         { question: "How do I set up parental controls on my Xiaomi phone ?", answer: "To set up parental controls, go to Settings > Digital Wellbeing & Parental Controls. Follow the instructions to create restrictions for app usage, screen time, and content filtering . " },
// //         { question: "What should I do if my Xiaomi phone won’t charge?", answer: "Check the charger and cable for any visible damage. Try a different outlet or charger, and clean the charging port to remove dust or debris. If the problem persists, try restarting the phone or contact a service center. " },
// //         { question: "What should I do if my Xiaomi phone has no sound during calls?", answer: "Check if the phone is in Silent mode or Do Not Disturb. If not, go to Settings > Sound & Vibration and increase the call volume. If the issue continues, test the earpiece using the Hardware Test in the Security app or contact customer support." },
// //         // Add more FAQs as needed
// //     ];

// //     const filteredFAQs = faqs.filter(faq =>
// //         faq.question.toLowerCase().includes(searchQuery.toLowerCase())
// //     ); // Filter FAQs based on search query

// //     const toggleAnswer = (index) => {
// //         setActiveIndex(activeIndex === index ? null : index);
// //     };

// //     useEffect(()=>{
// //         setTimeout(()=>{
// //             setIsLoading(false);
// //         }, 2000);
// //     },[]);

// //     return (
        
// //         <div className="faq-page">
// //             <div id="preloader" style={{
// //                 display: isLoading ? "block" : "none"
// //             }} >
// //                 < div class="wrapper">
// //                     <div class="box-wrap">
// //                         <div class="box one"></div>
// //                         <div class="box two"></div>
// //                         <div class="box three"></div>
// //                         <div class="box four"></div>
// //                         <div class="box five"></div>
// //                         <div class="box six"></div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="background-blur"></div>
// //             <header style={{backgroundColor:"red"}}></header>

// //             <div className="faq-container">
// //                 <h1>Frequently Asked Questions</h1>

// //                 {/* Search Bar */}
// //                 <div className="search-bar">
// //                     <input
// //                         type="text"
// //                         placeholder="Search FAQs..."
// //                         value={searchQuery}
// //                         onChange={(e) => setSearchQuery(e.target.value)}
// //                     />
// //                     <i className="fas fa-search"></i> {/* Search icon */}
// //                 </div>

// //                 <div className="faq-list">
// //                     {/* Conditional rendering: if no results, display a message */}
// //                     {filteredFAQs.length > 0 ? (
// //                         filteredFAQs.map((faq, index) => (
// //                             <div key={index} className="faq-item ">
// //                                 <div
// //                                     className={`faq-question   ${activeIndex === index ? 'active' : ''}`}
// //                                     onClick={() => toggleAnswer(index)}
// //                                 >
// //                                     {faq.question} 
// //                                     <div>
// //                                         <i className="fas fa-angle-down"></i>
// //                                     </div>
// //                                 </div>
// //                                 {activeIndex === index && (
// //                                     <div className="faq-answer">
// //                                         {faq.answer}
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         ))
// //                     ) : (
// //                         <div className="no-results">No results found!</div>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default FAQs;
// import React, { useEffect, useState } from 'react';
// import '../../styles/FAQ.css';
// import '../../styles/preloaderStyle.css';

// const FAQs = () => {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isLoading, setIsLoading] = useState(true);

//     const faqs = [
//         { question: "What warranty does Xiaomi offer on its products?", answer: "Xiaomi typically offers a one-year warranty on most of its devices. However, warranty terms may vary depending on the product and region, so it's best to check the specific warranty policy for your item." },
//         { question: "How do I update the software on my Xiaomi device?", answer: "You can update your Xiaomi device by going to Settings > About phone > System update. If an update is available, follow the prompts to download and install it." },
//         { question: "What should I do if my Xiaomi phone is running slow?", answer: "To improve performance, try clearing app caches, uninstalling unused apps, disabling unnecessary background services, or restarting your device." },
//         { question: "How can I extend the battery life of my Xiaomi smartphone?", answer: "To maximize battery life, enable battery saver mode, reduce screen brightness, turn off location services, and use Dark Mode." },
//         { question: "Does Xiaomi provide a user manual for its devices?", answer: "Yes, Xiaomi provides user manuals for most of its devices. You can find a PDF version on the official Xiaomi website." },
//         { question: "How do I transfer data from my old phone to my new Xiaomi phone?", answer: "You can use the Mi Mover app to easily transfer data. Download the Mi Mover app on both devices and follow the instructions." },
//         { question: "How do I reset my Xiaomi phone to factory settings?", answer: "To factory reset your Xiaomi phone, go to Settings > About phone > Factory reset. Remember to back up important data first." },
//         { question: "What are the best ways to contact Xiaomi customer support?", answer: "You can contact Xiaomi customer support through their official website, customer support app, or by visiting a local Xiaomi service center." },
//         { question: "How do I enable developer options on my Xiaomi device?", answer: "To enable developer options, go to Settings > About phone and tap the MIUI version seven times." },
//         { question: "Are Xiaomi devices compatible with third-party accessories?", answer: "Many Xiaomi devices are compatible with third-party accessories, but it's recommended to check compatibility before purchasing." },
//         { question: "What do I do if my Xiaomi phone gets stuck in boot loop or won't start?", answer: "Try force restarting by holding down the power button for 10-15 seconds. If it doesn't work, boot into recovery mode by pressing the power and volume up buttons simultaneously, and perform a factory reset. If the problem persists, visit a service center." },
//         { question: "How do I set up parental controls on my Xiaomi phone?", answer: "To set up parental controls, go to Settings > Digital Wellbeing & Parental Controls. Follow the instructions to create restrictions for app usage, screen time, and content filtering." },
//         { question: "What should I do if my Xiaomi phone won't charge?", answer: "Check the charger and cable for any visible damage. Try a different outlet or charger, and clean the charging port to remove dust or debris. If the problem persists, try restarting the phone or contact a service center." },
//         { question: "What should I do if my Xiaomi phone has no sound during calls?", answer: "Check if the phone is in Silent mode or Do Not Disturb. If not, go to Settings > Sound & Vibration and increase the call volume. If the issue continues, test the earpiece using the Hardware Test in the Security app or contact customer support." },
//     ];

//     const filteredFAQs = faqs.filter(faq =>
//         faq.question.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     const toggleAnswer = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);
//     }, []);

//     return (
//         <div className="faq-page">
//             <div id="preloader" style={{
//                 display: isLoading ? "block" : "none"
//             }}>
//                 <div className="wrapper">
//                     <div className="box-wrap">
//                         <div className="box one"></div>
//                         <div className="box two"></div>
//                         <div className="box three"></div>
//                         <div className="box four"></div>
//                         <div className="box five"></div>
//                         <div className="box six"></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Background decorative elements */}
//             <div className="background-decoration">
//                 <div className="floating-shape shape-1"></div>
//                 <div className="floating-shape shape-2"></div>
//                 <div className="floating-shape shape-3"></div>
//                 <div className="floating-shape shape-4"></div>
//             </div>

//             <div className="faq-container">
//                 {/* Header Section */}
//                 <div className="faq-header">
//                     <div className="header-icon">
//                         <i className="fas fa-question-circle"></i>
//                     </div>
//                     <h1>Frequently Asked Questions</h1>
//                     <p className="subtitle">Find answers to common questions about Xiaomi devices and services</p>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="search-bar">
//                     <input
//                         type="text"
//                         placeholder="Search FAQs..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <i className="fas fa-search"></i>
//                 </div>

//                 {/* FAQ List */}
//                 <div className="faq-list">
//                     {filteredFAQs.length > 0 ? (
//                         filteredFAQs.map((faq, index) => (
//                             <div key={index} className="faq-item">
//                                 <div
//                                     className={`faq-question ${activeIndex === index ? 'active' : ''}`}
//                                     onClick={() => toggleAnswer(index)}
//                                 >
//                                     <span className="question-text">{faq.question}</span>
//                                     <div className="question-icon">
//                                         <i className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//                                     </div>
//                                 </div>
//                                 <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
//                                     <div className="answer-content">
//                                         <div className="answer-box">
//                                             {faq.answer}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="no-results">
//                             <div className="no-results-icon">
//                                 <i className="fas fa-search"></i>
//                             </div>
//                             <h3>No results found</h3>
//                             <p>Try adjusting your search terms</p>
//                         </div>
//                     )}
//                 </div>

//                 {/* Footer */}
//                 <div className="faq-footer">
//                     <p>Didn't find what you're looking for? 
//                         <span className="contact-link">Contact Support</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FAQs;


import React, { useEffect, useState } from 'react';
import '../../styles/FAQ.css';
import '../../styles/preloaderStyle.css';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const faqs = [
        { question: "What warranty does Xiaomi offer on its products?", answer: "Xiaomi typically offers a one-year warranty on most of its devices. However, warranty terms may vary depending on the product and region, so it's best to check the specific warranty policy for your item." },
        { question: "How do I update the software on my Xiaomi device?", answer: "You can update your Xiaomi device by going to Settings > About phone > System update. If an update is available, follow the prompts to download and install it." },
        { question: "What should I do if my Xiaomi phone is running slow?", answer: "To improve performance, try clearing app caches, uninstalling unused apps, disabling unnecessary background services, or restarting your device." },
        { question: "How can I extend the battery life of my Xiaomi smartphone?", answer: "To maximize battery life, enable battery saver mode, reduce screen brightness, turn off location services, and use Dark Mode." },
        { question: "Does Xiaomi provide a user manual for its devices?", answer: "Yes, Xiaomi provides user manuals for most of its devices. You can find a PDF version on the official Xiaomi website." },
        { question: "How do I transfer data from my old phone to my new Xiaomi phone?", answer: "You can use the Mi Mover app to easily transfer data. Download the Mi Mover app on both devices and follow the instructions." },
        { question: "How do I reset my Xiaomi phone to factory settings?", answer: "To factory reset your Xiaomi phone, go to Settings > About phone > Factory reset. Remember to back up important data first." },
        { question: "What are the best ways to contact Xiaomi customer support?", answer: "You can contact Xiaomi customer support through their official website, customer support app, or by visiting a local Xiaomi service center." },
        { question: "How do I enable developer options on my Xiaomi device?", answer: "To enable developer options, go to Settings > About phone and tap the MIUI version seven times." },
        { question: "Are Xiaomi devices compatible with third-party accessories?", answer: "Many Xiaomi devices are compatible with third-party accessories, but it's recommended to check compatibility before purchasing." },
        { question: "What do I do if my Xiaomi phone gets stuck in boot loop or won't start?", answer: "Try force restarting by holding down the power button for 10-15 seconds. If it doesn't work, boot into recovery mode by pressing the power and volume up buttons simultaneously, and perform a factory reset. If the problem persists, visit a service center." },
        { question: "How do I set up parental controls on my Xiaomi phone?", answer: "To set up parental controls, go to Settings > Digital Wellbeing & Parental Controls. Follow the instructions to create restrictions for app usage, screen time, and content filtering." },
        { question: "What should I do if my Xiaomi phone won't charge?", answer: "Check the charger and cable for any visible damage. Try a different outlet or charger, and clean the charging port to remove dust or debris. If the problem persists, try restarting the phone or contact a service center." },
        { question: "What should I do if my Xiaomi phone has no sound during calls?", answer: "Check if the phone is in Silent mode or Do Not Disturb. If not, go to Settings > Sound & Vibration and increase the call volume. If the issue continues, test the earpiece using the Hardware Test in the Security app or contact customer support." },
    ];

    const filteredFAQs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="faq-page">
            <div id="preloader" style={{
                display: isLoading ? "block" : "none"
            }}>
                <div className="wrapper">
                    <div className="box-wrap">
                        <div className="box one"></div>
                        <div className="box two"></div>
                        <div className="box three"></div>
                        <div className="box four"></div>
                        <div className="box five"></div>
                        <div className="box six"></div>
                    </div>
                    <div className="loading-text">Loading</div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="background-decoration">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
            </div>

            <div className="faq-container">
                {/* Header Section */}
                <div className="faq-header">
                    <div className="header-icon">
                        <i className="fas fa-question-circle"></i>
                    </div>
                    <h1>Frequently Asked Questions</h1>
                    <p className="subtitle">Find answers to common questions about Xiaomi devices and services</p>
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                </div>

                {/* FAQ List */}
                <div className="faq-list">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div
                                    className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <span className="question-text">{faq.question}</span>
                                    <div className="question-icon">
                                        <i className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </div>
                                </div>
                                <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                                    <div className="answer-content">
                                        <div className="answer-box">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <div className="no-results-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <h3>No results found</h3>
                            <p>Try adjusting your search terms</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="faq-footer">
                    <p>Didn't find what you're looking for? 
                        <span className="contact-link">Contact Support</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQs;