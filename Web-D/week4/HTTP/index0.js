const express = require('express');
const app = express();

// Define a route for GET requests to the root path
app.get('/', (req, res) => {
  res.send('Hello from the home page!');
});

// Define a route for GET requests to /users
app.get('/users', (req, res) => {
  // Fetch users from database or perform other logic
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});