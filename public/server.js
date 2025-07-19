const express = require('express');

const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('yicing website');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
