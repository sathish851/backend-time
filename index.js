const express = require('express');
const app = express();
const port = 3000;
const router = require('./src/routes')
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());

var cors = require('cors')
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/api/',router)