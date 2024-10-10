// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // Localhost
const port = 3000; // Port number

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header with status and content type
  res.statusCode = 200; // HTTP Status Code 200: OK
  res.setHeader('Content-Type', 'text/plain');

  // Send a response
  res.end('Hello, World!\n'); // End the response with some text
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
