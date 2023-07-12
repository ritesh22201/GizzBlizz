const express = require('express');
const TodoModel = require('../models/todosModel');
const todoMiddleware = require('../middlewares/todo.middleware');
const todosRoute = express.Router();

todosRoute.post('/addTodo', todoMiddleware, async(req, res) => {
    try {
        const todo = await TodoModel.create(req.body);
        res.status(200).send({'msg' : 'Todo added', todo});
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = todosRoute;