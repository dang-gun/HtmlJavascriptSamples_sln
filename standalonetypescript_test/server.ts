import http = require('http');
import * as fs from 'fs';
import * as path from 'path';

//const port = process.env.port || 5903
const port = 5903


http.createServer(function (req, res) {

    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = String(path.extname(filePath)).toLowerCase();

    //const mimeTypes = {
    //    '.html': 'text/html',
    //    '.js': 'text/javascript',
    //    '.css': 'text/css',
    //    '.json': 'application/json',
    //    '.png': 'image/png',
    //    '.jpg': 'image/jpg',
    //    '.gif': 'image/gif',
    //    '.svg': 'image/svg+xml',
    //};

    //const contentType = mimeTypes[extname] || 'application/octet-stream';

    //fs.readFile(filePath, function (error, content)
    //{
    //    if (error)
    //    {
    //        res.writeHead(500);
    //        res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
    //    }
    //    else
    //    {
    //        res.writeHead(200, { 'Content-Type': contentType });
    //        res.end(content, 'utf-8');
    //    }
    //});

}).listen(port);