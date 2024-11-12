const Product = require('../models/productsModel.js')
const productRouter = require('express').Router();
const { requireSignIn } = require('../middlewares/authMiddleware.js');


productRouter.post('/products', requireSignIn, async (req, res) => {
    const { name, price, description, imageUrl } = req.body;
    try {
        const product = await Product.create({ name, price, description, imageUrl });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
  

productRouter.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

productRouter.get('/cart', async (req, res) => {
    try {
        const id = req.id;
       // const products = await Product.find();
        res.json(cart[id]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = productRouter;
