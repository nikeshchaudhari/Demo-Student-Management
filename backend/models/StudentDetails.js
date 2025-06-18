const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    fullName :{type:String,require:true},
    address :{type:String,require:true},
    phone :{type:String,require:true},
    course :{type:String,require:true},

})
module.exports = mongoose.model("student",studentSchema);