const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req, res);
    res.end('Homepage')
})

server.listen(5000, () => {
    console.log(`Server is listening on port 5000`)
})