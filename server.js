/**
 * Test server for downloading files in electron
 */


const http = require('http');
const fs = require('fs');

// 1x1 gif
const imgBinary = new Buffer('47494638396101000100800000dbdfef00000021f90401000000002c00000000010001000002024401003b', 'hex');

const server = http.createServer((req, res) => {
    console.log('req received', req.headers);
    res.writeHead(200, {
        'Content-Type': 'image/gif',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'attachment; filename=test.gif'
    });
    res.end(imgBinary, 'binary');
});

server.listen(9010);
