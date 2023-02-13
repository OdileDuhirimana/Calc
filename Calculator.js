const express = require('express');
const app = express();

//addition of an array of numbers
app.get('/api/v1/add', (req, res) => {
  const numbers = req.query.numbers;

  if (!numbers) {
    return res.status(400).json({ error: 'Missing numbers parameter' });
  }

  const sum = numbers
    .split(',')
    .map(n => parseInt(n))
    .reduce((a, b) => a + b, 0);

  res.json({ sum });
});

//multiplication of an array of numbers
app.get('/api/v1/multiply', (req, res) => {
  const numbers = req.query.numbers;

  if (!numbers) {
    return res.status(400).json({ error: 'Missing numbers parameter' });
  }

  const product = numbers
    .split(',')
    .map(n => parseInt(n))
    .reduce((a, b) => a * b, 1);

  res.json({ product });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = app;
