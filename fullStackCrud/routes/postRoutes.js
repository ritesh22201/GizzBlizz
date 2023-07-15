const express = require('express');
const postRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PostModel = require('../models/postModel');
const auth = require('../middlewares/auth');

postRouter.get('/', async (req, res) => {
    try {
        const post = await PostModel.find();
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

postRouter.post('/addPost', auth, async (req, res) => {
    const { title } = req.body;
    try {
        const existedPost = await PostModel.findOne({ title });
        if (existedPost) {
            res.status(400).send({ 'msg': 'Post already added in the DB' });
        }
        else{
            const post = await PostModel.create(req.body);
            res.status(200).send({ 'msg': 'Post added Successfully', post });
        }
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

module.exports = postRouter;