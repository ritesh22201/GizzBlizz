const express = require('express');
const TodoModel = require('../models/todosModel');
const todoMiddleware = require('../middlewares/todo.middleware');
const todosRoute = express.Router();

todosRoute.get('/', async (req, res) => {
    const { q } = req.query;

    try {
        if (q) {
            const todos = await TodoModel.find({title: { $regex: q, $options: 'i' }});
            res.status(200).send(todos);
        }
        else {
            const todos = await TodoModel.find(req.query);
            res.status(200).send(todos);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

todosRoute.post('/addTodo', todoMiddleware, async (req, res) => {
    try {
        const todo = await TodoModel.create(req.body);
        res.status(200).send({ 'msg': 'Todo added', todo });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = todosRoute;