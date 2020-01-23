const mongoose = require("mongoose");
const __postsSchema = new mongoose.Schema({
    userId:String,
    title:String,
    body:String,
    likes:Number,
    disLikes:Number,
});
module.exports = mongoose.model('User', __postsSchema);