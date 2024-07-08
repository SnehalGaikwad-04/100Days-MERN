const express = require('express');
const app = express();
const port = 3000;

// Middleware 1: Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next(); // Pass control to the next middleware
});

// Middleware 2: JSON body parser middleware
app.use(express.json());

// Route handler for GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route handler for POST request
app.post('/data', (req, res) => {
  res.json({
    message: 'Data received',
    data: req.body,
  });
});

// Middleware 3: 404 handler (should be the last middleware)
app.use((req, res, next) => {
  res.status(404).send('Sorry, that route does not exist.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
