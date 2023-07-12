const express = require('express');
const connection = require('./.configs/db');
const todosRoute = require('./routes/todosRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/todo', todosRoute);


app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running at port ${process.env.port}`);
})