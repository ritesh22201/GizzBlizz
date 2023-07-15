const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : {type : String, required : true},
    content : {type : String, required : true},
    userID : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required : true},
    username : {type : String, required : true},
    likes : {type : [String], default : []},
    comments : {type : [String], default : []},
    tags : [String]
})

const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;
