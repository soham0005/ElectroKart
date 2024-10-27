const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    createdAt: { 
      type: Date, 
      default: Date.now, 
      expires: 600 // 600 seconds = 10 minutes
    }
  });

const Otpdata = mongoose.model('otp', otpSchema) ;
module.exports = {Otpdata}