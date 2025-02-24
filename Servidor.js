import { createServer } from 'node:http';
import fs from 'node:fs';
import querystring from 'node:querystring';


const server = createServer((req, res) => {
    
    var url = req.url;
    var fileName = "";
    if (url === "/") {
        fileName = "Inicio.html";
    }
    else if (url === "/register") {
        fileName = "Forma.html";
    }
    else if (url === "/gracias") {
        fileName = "Gracias.html";
    }

    
    if (req.method === 'GET') {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Not Found');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }
    else if (req.method === 'POST' && req.url === '/register') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Collect chunks
        });

        req.on('end', () => {
            // Format 'username=john_doe&password=secure123'
            console.log('Full request body:', body); // Now we have the full data
            // TO DO: coger los datos del querystring


            res.writeHead(302, { 'Location': '/gracias' });  // redirect
            res.end('Data received!');
        });
    } else {
        res.end('Send a POST request to /login');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000/');
});