const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistModel = require('../models/blacklist');
const PostModel = require('../models/postModel');
const auth = require('../middlewares/auth');
const postRouter = express.Router();

postRouter.get('/', auth, async(req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

postRouter.post('/add', auth, async(req, res) => {
    const {title} = req.body;
    try {
        const existedPosts = await PostModel.findOne({title});
        if(existedPosts){
            res.status(400).send({'msg' : 'Post already added'});
        }
        else{
            const posts = await PostModel.create(req.body);
            res.status(200).send({'msg' : 'Post added successfully', posts});
        }
       
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = postRouter;