const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors")
const User = require("./user")
const mongoose = require("mongoose");
const studentRoutes = require("./student")

require('dotenv').config()

const dbConnect =async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Database connected....");
    
  } catch (err) {
    console.log("Something is wrong....");
    console.log(err);
    
    
  }
};
dbConnect();

app.use(bodyParser.json());
app.use(cors())
app.use("/student", studentRoutes);
app.use("/user",User)
module.exports = app; 
