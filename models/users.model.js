const mongoose = require('mongoose');
const __usersSchema = new mongoose.Schema({
    name:{type:String, require: true},
    phone:Number,
    email:String,
    password:String,
    age:Number,
    favColor:String,
},
{ versionKey: false });
module.exports = mongoose.model('User', __usersSchema);