const mongoose = require('mongoose');
const __commentsSchema = new mongoose.Schema({
    userId:String,
    postId:String,
    Comments:String
});
module.exports = mongoose.model('User', __commentsSchema);