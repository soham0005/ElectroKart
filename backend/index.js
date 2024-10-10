const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db.js');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoute.js')
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

//const app = express();
app.use(express.json());
app.use(cors());
// User schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Product schema and model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});

const Product = mongoose.model('Product', productSchema);

// Order schema and model
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number } }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'pending' },
});

const Order = mongoose.model('Order', orderSchema);

// Middleware to protect routes
const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
  } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
  }
};

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword });
      res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Product routes
app.post('/api/products', authMiddleware, async (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  try {
      const product = await Product.create({ name, price, description, imageUrl });
      res.status(201).json(product);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
      const products = await Product.find();
      res.json(products);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Order routes
app.post('/api/orders', authMiddleware, async (req, res) => {
  const { products, totalAmount } = req.body;
  try {
      const order = await Order.create({ user: req.user.id, products, totalAmount });
      res.status(201).json(order);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.get('/api/orders', authMiddleware, async (req, res) => {
  try {
      const orders = await Order.find({ user: req.user.id }).populate('products.product');
      res.json(orders);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//configure env
dotenv.config();

//database config
connectDB();

//routes
app.use("/api/v1/auth", authRoutes);



app.get("/hello",async(req,res)=>{
  console.log("Inside Hello GET Request");
  return res.json({"message":"Success"}).status(200);
})


app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
