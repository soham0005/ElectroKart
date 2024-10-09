const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Electro");
    console.log(
      `Connected To Mongodb Database`
    );
  } catch (error) {
    console.log(`Error in Mongodb  ${error}`);
  }
};

module.exports = connectDB;
