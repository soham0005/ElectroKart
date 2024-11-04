const mongoose = require('mongoose');

const starProductSchema = new mongoose.Schema({
    url: { type: String, required: true },
    image: { type: String, required: true },
  });
  
const StarProduct = mongoose.model('StarProduct', starProductSchema);