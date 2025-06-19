const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Studentadd = require('./models/Signup')

// Post / Register
router.post("/register", async (req, res) => {
  try {
    const email = await Studentadd.find({ email: req.body.email });
    if (email.length > 0) {
      return res.status(500).json({
        msg: "Already Email Register..",
      });
    }
    const hashData = await bcrypt.hash(req.body.password, 10);

    const addData = await new Studentadd({
     
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashData,
      address: req.body.address,
      phone: req.body.phone,
      
    });
    const data = await addData.save();
    res.status(200).json({
      data: data,
    });
  } catch (err) {
    console.log("error");
       console.log("something wrong register..");
    res.status(400).json({
      error: err,
    });
  }
});


// Login /Get
router.post("/login", async (req, res) => {
  try{
    const user = await Studentadd.findOne({ email: req.body.email });
  //    console.log(email[0]);

  if (user == 0) {
    return res.status(500).json({
      msg: "Not found email ",
    });
  }
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(500).json({
      msg: "Invalid username or password..",
    });
  }
  const token = jwt.sign( 
    {
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      address: user.address,
      phone: user.phone,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "365d",
    }
  );
  res.status(200).json({
     _id: user.id,
      fullName: user.fullName,
      email: user.email,
      address: user.address,
      phone: user.phone,
      token:token

})
  }
  catch(err){
    console.log("something wrong");
    res.status(500).json({
        error:err
    })
    
  }
});

module.exports = router;