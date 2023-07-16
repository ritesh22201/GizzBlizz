const express = require('express');
const connection = require('./.configs/db');
const userRouter = require('./routes/authRoutes');
const postRouter = require('./routes/postRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use('/user', userRouter);
app.use('/post', postRouter);

const options = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : 'Learning swagger for the first time',
            version : '1.0.0'
        },
        server : {
            url : 'http://localhost:8080'
        }
    },
    apis : ["./routes/*.js"]
}

const swaggerSpec = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running at port ${process.env.port}`);
})