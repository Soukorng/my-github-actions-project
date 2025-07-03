// app.js
const express = require('express');
const app = express();
const port = 3000;

// Added a harmless comment for testing commit
// This comment does not affect functionality

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
