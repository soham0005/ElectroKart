const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoute.js')


const app = express();
app.use(express.json());
app.use(cors());


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
