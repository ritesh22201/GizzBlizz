const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistModel = require('../models/blacklist');
const PostModel = require('../models/postModel');
const auth = require('../middlewares/auth');
const postRouter = express.Router();

postRouter.get('/', auth, async(req, res) => {
    const userID = req.body.userID;
    try {
        const posts = await PostModel.find({userID});
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

postRouter.patch('/update/:id', auth, async(req, res) => {
    const id = req.params.id;
    const user = await PostModel.findOne({_id : id});
    try {
        if(user.userID.toString() == req.body.userID){
            const updatedPost = await PostModel.findByIdAndUpdate({_id : id}, req.body, {new : true});
            res.status(200).send({'msg' : 'Post updated successfully', updatedPost});
        }
        else{
            res.status(400).send({'msg' : 'You are not authorized to do this.'})
        }

    } catch (error) {
        res.status(400).send({'msg' : error.message})
    }
})

postRouter.delete('/delete/:id', auth, async(req, res) => {
    const id = req.params.id;
    try {
        const deletedPost = await PostModel.findByIdAndDelete({_id : id});
        res.status(200).send({'msg' : 'Post deleted successfully'});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = postRouter;