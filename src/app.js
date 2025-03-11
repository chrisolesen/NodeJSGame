const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = req.url === '/' ? 'public/html/index.html' : `public${req.url}`;
    const extname = String(filePath).split('.').pop();
    let contentType = 'text/html';

    switch (extname) {
        case 'js':
            contentType = 'text/javascript';
            break;
        case 'css':
            contentType = 'text/css';
            break;
        case 'json':
            contentType = 'application/json';
            break;
        case 'png':
            contentType = 'image/png';
            break;
        case 'jpg':
            contentType = 'image/jpg';
            break;
        case 'wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile('public/html/404.html', (error, content) => {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(content, 'utf-8');
                });
            } else {
                res.statusCode = 500;
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data, 'utf-8');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
/*
The code above creates a simple HTTP server that listens on port 3000 and responds with “Hello, World!” to all requests. 
To run the server, type the following command: 
node app.js 
The server should now be running at  http://
*/