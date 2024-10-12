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
        res.status(500).json({ error: error.message });
    }
  });