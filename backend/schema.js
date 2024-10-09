const mongoose = require('mongoose');

// Create a schema
const bannerSchema = new mongoose.Schema({
    start: [{ type: String }],
    end: [
        {
            name: String,
            description: String,
            source: String,
            image: String,
        },
    ],
});

const offerSchema = new mongoose.Schema({
    url: String,
    image: String,
});

const starProductSchema = new mongoose.Schema({
    url: String,
    image: String,
});

const hotAccessoriesSchema = new mongoose.Schema({
    music: [
        {
            name: String,
            price: String,
            image: String,
        },
    ],
    smartDevice: [
        {
            name: String,
            price: String,
            image: String,
        },
    ],
    home: [
        {
            name: String,
            price: String,
            image: String,
        },
    ],
    lifeStyle: [
        {
            name: String,
            price: String,
            image: String,
        },
    ],
    mobileAccessories: [
        {
            name: String,
            price: String,
            image: String,
        },
    ],
});

const hotAccessoriesCoverSchema = new mongoose.Schema({
    music: String,
    smartDevice: String,
    home: String,
    lifeStyle: String,
    mobileAccessories: String,
});

const productReviewsSchema = new mongoose.Schema({
    image: String,
    review: String,
    name: String,
    price: String,
});

const videosSchema = new mongoose.Schema({
    name: String,
    image: String,
});

const footerSchema = new mongoose.Schema({
    support: [
        {
            name: String,
            url: String,
        },
    ],
    shopAndLearn: [
        {
            name: String,
            url: String,
        },
    ],
    retailStore: [
        {
            name: String,
            url: String,
        },
    ],
    aboutUS: [
        {
            name: String,
            url: String,
        },
    ],
})