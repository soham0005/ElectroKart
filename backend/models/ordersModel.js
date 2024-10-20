const mongoose = require('mongoose');

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