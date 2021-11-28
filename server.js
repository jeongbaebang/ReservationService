const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.resolve(__dirname, './src', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/static/dist', 'index.html'));
});

app.listen(process.env.PORT || 3000);
