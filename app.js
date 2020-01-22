const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(8080, () => console.log(`Example app listening on port 8080!`))