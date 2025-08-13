require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('EnglishBulldogClicker'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});