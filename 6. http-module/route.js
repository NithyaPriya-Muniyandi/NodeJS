const http = require('http');

const server = http.createServer((req, res) =>{
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.end('Welcome to the Home Page!\n');
    }else if(url === '/about'){
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.end('Welcome to the About Page!\n');    
    }else if(url==='/contact'){
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.end('Welcome to the Contact Page!\n');
    }else{
        res.writeHead(404, {'content-type' : 'text/plain'});
        res.end('404 Not Found\n');
    }
});

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})