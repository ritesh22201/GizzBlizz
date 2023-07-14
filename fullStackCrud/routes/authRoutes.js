const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Hi from Homepage');
})

module.exports = userRouter;