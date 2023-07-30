const express = require('express');
const UserModel = require('../models/userModel');
const validator = require('../middlewares/validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const userRouter = express.Router();

userRouter.post('/register', validator, async (req, res) => {
    const { password } = req.body;
    try {
        const newPass = await bcrypt.hash(password, 10);
        const user = await UserModel.create({ ...req.body, password: newPass });
        res.status(200).send({ 'msg': 'User registered successfully', user });
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            res.status(400).send({ 'msg': "User doesn't exist" });
        }
        else {
            const newPass = await bcrypt.compare(password, user.password);
            if (!newPass) {
                res.status(400).send({ 'msg': "Incorrect Password" });
            }
            else{
                const token = jwt.sign({userId : user._id, name : user.name}, process.env.secretKey, {expiresIn : '5h'});
                res.status(200).send({ 'msg': 'User logged in successfully', token });
            }
        }
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

module.exports = userRouter;