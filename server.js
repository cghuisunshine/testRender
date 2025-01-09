const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample GET route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js app!');
});

// Sample POST route
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: `Hello, ${name}! You are ${age} years old.`,
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

