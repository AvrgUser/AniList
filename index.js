var express = require('express');
//const db = require("./src/back/bd.js");
var app = express();
app.use(express.static('./dist'));
var port = process.env.PORT || 8080;

console.log(process.pid)

app.listen(port, () => {
   console.log(`Server running at http://0.0.0.0:${port}/`);
 });