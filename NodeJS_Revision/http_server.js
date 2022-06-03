
const http = require('http');
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    res.end('<h2>This is your server response </h2>')
})

const port = 3000;
server.listen( port, () => {
    console.log('HTTP server listening on port: ', port)
});


//Using Express

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Server Started');
// })
// const port = 3000;
// app.listen(port, () => {
//     console.log('Listening on port: ', port);
// })