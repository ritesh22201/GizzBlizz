const express = require('express');
const connection = require('./.configs/db');
const userRouter = require('./routes/authRoutes');
const postRouter = require('./routes/postRoutes');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use('/user', userRouter);
app.use('/post', postRouter)


app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running at port ${process.env.port}`);
})