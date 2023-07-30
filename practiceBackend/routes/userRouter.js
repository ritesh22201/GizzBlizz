const express = require('express');
const UserModel = require('../models/userModel');
const validator = require('../middlewares/validator');
const userRouter = express.Router();

userRouter.post('/register', validator, async(req, res) => {
    const {password} = req.body;
    try {
        const newPass = await bcrypt.hash(password, 10);
        const user = await UserModel.create({...req.body, password : newPass});
        res.status(200).send({'msg' : 'User registered successfully', user});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = userRouter;