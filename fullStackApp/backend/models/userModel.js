const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    gender : {type : String, enum : ['male', 'female', 'other'], required : true},
    password : {type : String, required : true},
    age : {type : Number, required : true},
    city : {type : String, required : true},
    is_married : {type : Boolean, required : false}
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;