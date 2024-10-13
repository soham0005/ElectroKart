const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});

const Product = mongoose.model('Product', productSchema);

// Order schema
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'pending' },
});

const Order = mongoose.model('Order', orderSchema);

// Offer schema
const offerSchema = new mongoose.Schema({
  url: { type: String, required: true },
  image: { type: String, required: true },
});

const Offer = mongoose.model('Offer', offerSchema);

// Star Product schema
const starProductSchema = new mongoose.Schema({
  url: { type: String, required: true },
  image: { type: String, required: true },
});

const StarProduct = mongoose.model('StarProduct', starProductSchema);

// Hot Accessories schema
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

// Exporting models
module.exports = {
  User,
  Product,
  Order,
  Offer,
  StarProduct,
  HotAccessories,
};
