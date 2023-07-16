const express = require('express');
const connection = require('./db');
const app = express();
require('dotenv').config();
app.use(express.json());



app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
       console.log(error);
    }
    console.log(`Server is running at port ${process.env.port}`);
})