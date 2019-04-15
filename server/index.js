const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('dist'))

app.get('/test', (req, res) => res.send('Test Express Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))