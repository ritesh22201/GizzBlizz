const http = require('http');

const server = http.createServer((req, res) => {
    // res.statusCode = 201;
    // res.setHeader('Content-Type', 'text/html')
    const parsedUrl = url.parse(req.url);
    console.log(parsedUrl);

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the homepage</h1>');
    }
    else if(req.method === 'GET' && req.url === '/about'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('<h1>Welcome to the about about page</h1>');
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1>Page not found</h1>');
    }

})


server.listen(8080, () => {
    console.log('Server is running on port 8080');
})