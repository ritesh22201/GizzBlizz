const express = require('express');
const UserModel = require('../models/userModel');
const userRouter = express.Router();
const bcrypt = require('bcrypt');

userRouter.get('/', (req, res) => {
    res.send('Hi from Homepage');
})

app.post('/register', async(req, res) => {
    const {password} = req.body;
    try {
       const newPass = bcrypt.hash(password, 10);
       const user = await UserModel.create({...req.body, password : newPass}); 
       res.status(200).send({'msg' : 'User registered successfully', user});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = userRouter;