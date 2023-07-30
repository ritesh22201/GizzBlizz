const express = require('express');
const connection = require('./db');
require('dotenv').config();
const app = express();

app.get('/', async(req, res) => {
    try {
        res.status(200).send('Hii from homepage');
    } catch (error) {
       res.status(400).send(error.message);
    }
})

app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running at port ${process.env.port}`);
})