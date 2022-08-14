var express = require('express');
//var path = require('path');
var serveStatic = require('serve-static');
//var sqldb = require('./bd.js')
const app = express();
const servingDir = __dirname + "/dist";

console.log(__dirname)

app.use(serveStatic(servingDir));
var port = process.env.PORT || 8080;

app.use('/auth', (req, res)=>{
  console.log(req.url)
  if(req.query.m=='signup') res.sendFile(servingDir+'/reg.html')
  else res.sendFile(servingDir+'/auth.html');
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})