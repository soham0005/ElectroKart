const mongoose = require('mongoose');

const hotAccessoriesSchema = new mongoose.Schema({
    music: [
      {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    smartDevice: [
      {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    home: [
      {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    lifeStyle: [
      {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    mobileAccessories: [
      {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
  });
  
  const HotAccessories = mongoose.model('HotAccessories', hotAccessoriesSchema);