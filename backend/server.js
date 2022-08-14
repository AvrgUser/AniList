var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var sqldb = require('./bd')

const app = express();

let dbcon = new sqldb.DBConnection('176.126.103.146', '3306', 'u67_yuHgwq9HhW', 's67_anilist', 'UvT9Qn4c!58Q3pUnL4zi4lnD');


let servingDir = path.parse(__dirname).dir+'\\dist';

console.log(servingDir)

app.use(serveStatic(servingDir));
var port = process.env.PORT || 5000;

app.use('/auth', (req, res)=>{
  console.log(req.url)
  if(req.query.m=='signup') res.sendFile(servingDir+'/reg.html')
  else res.sendFile(servingDir+'/auth.html');
})

app.use('/reguser', (req, res)=>{
  console.log('trying add user')
  dbcon.addElement('users', [{field: 'name', value: req.query.n},{field: 'password', value: req.query.p},{field: 'anime', value: 'empty'}], (e, res)=>{
    if(e)console.log(e.message)
    else console.log(res)
  })
  res.end('ssss');
})

app.listen(port, (req, res) => {
  console.log(`Server running at http://localhost:${port}/`)
})