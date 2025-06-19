const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Students = require("./models/StudentDetails");
const jwt = require("jsonwebtoken");

// Add Details
router.post("/add-student", async (req, res) => {
  try {
    const token = await jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_KEY
    );
    console.log(token);

    const dataAdd = await new Students({
      fullName: req.body.fullName,
      address: req.body.address,
      phone: req.body.phone,
      course: req.body.course,
      uId: token._id,
    });
    const data = await dataAdd.save();
    res.status(200).json({
      addData: data,
    });

    // console.log(req);
    // console.log(req.headers.authorization);
  } catch (err) {
    console.log("error");
    res.status(400).json({
      error: err,
    });
  }
});

// View Studentdetails

router.get("/viewstudent", async (req, res) => {
  try {
    const token = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_KEY
    );
    // console.log(token._id);

    const data = await Students.find({ uId: token._id });
    console.log(data);
    res.status(200).json({
      data: data,
    });
  } catch (err) {
    console.log("error");
    res.status(400).json({
      error: err,
    });
  }
});

// Delete Data

router.delete('/delete/:id',async(req,res)=>{
try{
   const user = await jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_KEY);
//  console.log(user);

 const data = await Students.find({_id:req.params.id});
 console.log(data[0]);
 
 if(data[0].uId != user._id){
  return res.status(500).json({
    msg:"Invalid user..."
  })
 }
 console.log(data[0]);
 

 const deleteData = await Students.findByIdAndDelete(req.params.id)
 res.status(200).json({
  deleteData : deleteData
 })
}
catch(err){
  console.log("error");
  res.status(400).json({
    error:err
  })
  
}
 

})

module.exports = router;
