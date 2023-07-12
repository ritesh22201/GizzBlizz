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

todosRoute.patch('/update/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate({_id : id}, req.body, {new : true});
        res.status(200).send({'msg' : 'Todo updated', updatedTodo});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

todosRoute.delete('/delete/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const deletedTodo = await TodoModel.findByIdAndDelete({_id : id});
        res.status(200).send({'msg' : 'Todo deleted'});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = todosRoute;