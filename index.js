var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
<<<<<<< HEAD:backend/server.js
var sqldb = require('./bd')
=======
//var sqldb = require('./bd.js')
const app = express();
const servingDir = __dirname + "/dist";
>>>>>>> origin/main:index.js

const app = express();

let dbcon = new sqldb.DBConnection('176.126.103.146', '3306', 'u67_yuHgwq9HhW', 's67_anilist', 'UvT9Qn4c!58Q3pUnL4zi4lnD');


let servingDir = path.parse(__dirname).dir+'\\dist';

console.log(servingDir)

app.use(serveStatic(servingDir));
<<<<<<< HEAD:backend/server.js
var port = process.env.PORT || 5000;
=======
var port = process.env.PORT || 8080;
>>>>>>> origin/main:index.js

app.use('/auth', (req, res)=>{
  console.log(req.url)
  if(req.query.m=='signup') res.sendFile(servingDir+'/reg.html')
  else res.sendFile(servingDir+'/auth.html');
})

<<<<<<< HEAD:backend/server.js
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
=======
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
>>>>>>> origin/main:index.js
})