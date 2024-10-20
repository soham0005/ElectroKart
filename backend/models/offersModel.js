const mongoose = require('mongoose');

// Offer schema
const offerSchema = new mongoose.Schema({
    url: { type: String, required: true },
    image: { type: String, required: true },
  });
  
const Offer = mongoose.model('Offer', offerSchema);
  