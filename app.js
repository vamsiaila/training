const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


app.use(bodyParser.json());
app.use('/api', routes);

mongoose.connect("mongodb://localhost:27017/sweety",{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error',(err)=>{
    console.log(err);
});

db.once('open', () => {
    console.log('mongodb connected');
    app.listen(8080, () => console.log(`Example app listening on port 8080!`));
});