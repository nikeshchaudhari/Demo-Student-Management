const { text } = require("body-parser")
const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({

    fullName:{type:String,requied:true},
    email:{type:String,required:true},
    password:{type:String,requird:true},
    address :{type:String,required:true},
    phone:{type:String,required:true},

})
module.exports = mongoose.model("user",studentSchema);