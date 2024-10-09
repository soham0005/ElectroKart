const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
          },
          phone: {
            type: String,
            required: true,
          },
          answer:{
            type:String,
            required:true,
          },
          role: {
            type: Number,
            default: 0,
          },
})

module.exports = mongoose.model("user", userSchema);