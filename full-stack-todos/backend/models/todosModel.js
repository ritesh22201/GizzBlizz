const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    created_at: { type: Date, required: true, default : Date.now },
    priority: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required : true
    }
})

const TodoModel = mongoose.model('todo', todoSchema);

module.exports = TodoModel;