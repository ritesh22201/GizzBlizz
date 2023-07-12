const express = require('express');
const connection = require('./db');
const app = express();
app.use(express.json());



app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running at port ${process.env.port}`);
})