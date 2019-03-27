"use strict";
let express = require("express");
let app = express();

let server = app.listen(5000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get('/test1', (req, res) => {
  res.send('test1');
});
app.get('/test2', (req, res) => {
  res.send('test2');
});
app.get('/test3', (req, res) => {
  res.send('test3');
});
app.get('/test4', (req, res) => {
  res.send('test4');
});
app.get('/test5', (req, res) => {
  res.send('test5');
});
