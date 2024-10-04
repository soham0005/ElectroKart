const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData.js');


const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect('mongodb://127.0.0.1:27017/shopify')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await FormDataModel.findOne({ email });

    if (user) {
      res.json("Already registered");
    } else {
      const newUser = new FormDataModel(req.body);
      await newUser.save();
      res.json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await FormDataModel.findOne({ email });

    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    } else {
      res.json("No records found!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
