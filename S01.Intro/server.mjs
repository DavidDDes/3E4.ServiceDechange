import { createServer } from 'node:http';

const MyFirstServer = createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200, 'Content-Type', 'text/plain');
    response.end('Hello from my server');
});

MyFirstServer.listen(3000, '127.0.0.1', () =>{
    console.log(`Le serveur est en mode écoute sur http://$127.0.0.1:3000`)
});

