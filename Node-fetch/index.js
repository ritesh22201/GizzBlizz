const express = require('express');
const app = express();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is working fine');
})

app.get('/users', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.send(users);
})

app.listen(8080, () => {
    console.log('Server is running at port 8080');
})