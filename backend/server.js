var express = require('express');
//var path = require('path');
var serveStatic = require('serve-static');
//var sqldb = require('./bd.js')
const app = express();
const servingDir = "C:/Projects/AniList/dist";

console.log(__dirname)

app.use(serveStatic(servingDir));
var port = process.env.PORT || 5000;
var hostname = '127.0.0.1';

app.use('/auth', (req, res)=>{
  console.log(req.url)
  if(req.query.m=='signup') res.sendFile(servingDir+'/reg.html')
  else res.sendFile(servingDir+'/auth.html');
})

app.listen(port, hostname, (req, res) => {
  console.log(`Server running at http://${hostname}:${port}/`);
})