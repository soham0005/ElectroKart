const { requireSignIn } = require('../middlewares/authMiddleware.js');
const Order = require('../models/ordersModel.js')
const orderRouter = require('express').Router();

  
  // Order routes
orderRouter.post('/orders', requireSignIn, async (req, res) => {
    const { products, totalAmount } = req.body;
    try {
        const order = await Order.create({ user: req.user.id, products, totalAmount });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
  
orderRouter.get('/orders', requireSignIn, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('products.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

module.exports = orderRouter;