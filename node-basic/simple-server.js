// module from nodejs for simple server
const http = require('http');


const server = http.createServer((req, res) => {
    res.end("getting caught in the rain...");
});

server.listen(3000);

