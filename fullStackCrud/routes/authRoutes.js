const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Hi from Homepage');
})

app.post('/register', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = userRouter;