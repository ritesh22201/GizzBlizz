const TodoModel = require("../models/todosModel");

const todoMiddleware = async(req, res, next) => {
    const {title, status} = req.body;

    if(!title || !status){
        return res.status(400).send({'msg' : 'All fields are required'});
    }

    const existedTodo = await TodoModel.findOne({title});
    if(existedTodo){
        return res.status(400).send({'msg' : 'Todo is already created'});
    }

    next();
}

module.exports = todoMiddleware;