const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mailer = require('./mailer');
require("dotenv").config();
let port = process.env.PORT || process.env.ports;

let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/mailer',urlencodedParser, async (req, res) => {
    
    res.send(await mailer(
        req.body
    ));
});
 
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/api',(req, res)=> {
    res.json({"message":"helloworld"});
})

app.listen(port,()=>{
    console.info(`Connected to ${port}`);
});