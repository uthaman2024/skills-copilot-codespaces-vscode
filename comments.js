// Create web server
// Use the express library
const express = require('express');
// Create the server
const app = express();
// Set up the server to listen on port 3000
app.listen(3000);
// Create a route to handle comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page.');
});
// Create a route to handle comments
app.get('/comments/:id', (req, res) => {
  res.send('This is the comments page for ' + req.params.id);
});