const express = require('express');
const app = express();

app.use(express.json({ type: '*/*' })); //parse JSON regardless of the Content-Type header
app.post('/users', (req, res) => {
  const user = req.body;
  // ... process user data ...
  res.status(201).send();
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});