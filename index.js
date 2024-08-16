const express = require('express');
const app = express();
const port = 3000;

let sum = 0;
app.get('/', (req, res) => {
  res.send(`${sum}`);
  sum++;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});