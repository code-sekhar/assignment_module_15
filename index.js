const http = require('http');
const fs = require('fs');

// Define the port number
const PORT = 5500;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Handle the different routes
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the About Page');
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is the Contact Page');
  } else if (req.url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error writing file');
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('File created successfully');
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});