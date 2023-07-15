const express = require('express');
const postRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PostModel = require('../models/postModel');
const auth = require('../middlewares/auth');

postRouter.get('/', async (req, res) => {
    const { q } = req.query;
    try {
        if (q) {
            const post = await PostModel.findOne({ title: { $regex: q, $options: 'i' } });
            res.status(200).send(post);
        }
        else {
            const post = await PostModel.find();
            res.status(200).send(post);
        }

    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

postRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await PostModel.findOne({_id : id});
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
        else {
            const post = await PostModel.create(req.body);
            await post.populate('userID');
            res.status(200).send({ 'msg': 'Post added Successfully', post });
        }
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

module.exports = postRouter;