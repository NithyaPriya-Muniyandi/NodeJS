const http = require('http');
const url = require('url'); // Importing the url module

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL with query string
  const pathname = parsedUrl.pathname;

  res.setHeader('Content-Type', 'text/plain');

  if (pathname === '/') {
    res.writeHead(200);
    res.end('Home Page');
  } else if (pathname === '/about') {
    res.writeHead(200);
    res.end('About Page');
  } else if (pathname === '/contact') {
    res.writeHead(200);
    res.end('Contact Page');
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
