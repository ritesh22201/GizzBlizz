const express = require('express');
const UserModel = require('../models/userModel');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Hi from Homepage');
})

app.post('/register', async(req, res) => {
    try {
       const user = await UserModel.create(req.body); 
       res.status(200).send({'msg' : 'User registered successfully', user});
    } catch (error) {
        
    }
})

module.exports = userRouter;