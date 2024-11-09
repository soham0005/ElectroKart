// frontend/src/components/ExclusiveOffers.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ExclusiveOffers.css';
import smartBundleImg from '../assets/smart-bundle-img.jpg';
import bestsellingSmartphonesImg from '../assets/bestselling-smartphones-image.jpg';
import smartTvImg from '../assets/smart-tv-image.jpg';
import powerBanksImg from '../assets/power-banks-image.jpg';
import audioProductsImg from '../assets/audio-products-image.jpg';
// import promotionalVideo from '../assets/promotionalVideo.mp4'; // Add your video file here

const ExclusiveOffers = () => {
    const offers = [
        {
            image: smartBundleImg,
            title: 'Smart Bundles',
            description: 'Unlock extra savings with product bundles – Save up to 45%!',
        },
        {
            image: bestsellingSmartphonesImg,
            title: 'Bestselling Smartphones',
            description: 'Get the most popular smartphones at exclusive Diwali/Festival discounts!',
        },
        {
            image: smartTvImg,
            title: 'Smart TV',
            description: 'Enjoy crystal-clear displays with deals on the latest Smart TVs.',
        },
        {
            image: powerBanksImg,
            title: 'Power Banks',
            description: 'Power on the go! Shop high-capacity power banks with fast charging.',
        },
        {
            image: audioProductsImg,
            title: 'Audio Products',
            description: 'Experience immersive sound with wireless earbuds, headphones, and speakers.',
        },
    ];

    return (
        <div className="exclusive-offers">
            <h2 className="section-title">Exclusive Diwali Offers</h2>
            <Carousel className="offers-carousel">
                {offers.map((offer, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={offer.image}
                            alt={offer.title}
                            loading="lazy"
                        />
                        <Carousel.Caption>
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* <div className="video-container">
                <h3>Watch Our Promotional Video</h3>
                <video controls>
                    <source src={promotionalVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
        </div>
    );
};

export default ExclusiveOffers;