'use strict';

const express = require('express');

const PORT = 9000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('This is the new service \n\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
