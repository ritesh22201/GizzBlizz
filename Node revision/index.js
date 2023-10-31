const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'about.html');

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the homepage</h1>');
    }
    else if(req.method === 'GET' && req.url === '/about'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream('./about.html').pipe(res);
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1>Page not found</h1>');
    }

})

server.listen(8080, () => {
    console.log('Server is running on port 8080');
})