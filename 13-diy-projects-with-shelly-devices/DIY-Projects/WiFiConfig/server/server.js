const express = require('express');
const app = express();

app.get('/slow-endpoint', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'Response after 4 seconds' });
  }, 17000);
});

app.listen(3000, () => console.log('Listening on port 3000'));
