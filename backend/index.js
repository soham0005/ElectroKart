// Required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes.js')
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
const bodyParser = require('body-parser');
const contactRoutes = require("./routes/contactUs.js")

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Test route
app.get('/hello', async (req, res) => {
  console.log('Inside Hello GET Request');
  res.status(200).json({ message: 'Success' });
});

app.use('/api', authRoutes)
app.use('/api', orderRoutes)
app.use('/api', productRoutes)
app.use("/api", contactRoutes);
// Start the server

const PORT = process.env.PORT || 5000;
// Connect to MongoDB
const CONNECTION_URL =  process.env.MONGO_URL

mongoose.connect(CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => app.listen(PORT,() => {console.log( `server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message) )
;
