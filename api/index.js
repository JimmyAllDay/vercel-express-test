const express = require('express');
const app = express();
require('dotenv').config('/api/.env');
const port = process.env.PORT;
const cors = require('cors');

app.use(cors());

app.get('/api/test', (req, res) => {
  res.json({
    body: 'This message is returned from the server - the app is working.',
  });
});

if (port) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
