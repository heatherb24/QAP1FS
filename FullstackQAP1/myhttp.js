// the http module is for handling web servers and managing HTTP requests and responses
// it is essential for building web applications
// it can create a server, listen for incoming requests, and send back responses

const http = require('http');
console.log('myhttp is running');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Test\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});