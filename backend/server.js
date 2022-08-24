var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var sqldb = require('./bd.js')
const cookieParser = require('cookie-parser')
const { nextTick } = require('process')
const app = express();
const jsonParser = express.json();

let dbcon = new sqldb.DBConnection('194.190.152.244', '3306', 'u67_yuHgwq9HhW', 's67_anilist', 'UvT9Qn4c!58Q3pUnL4zi4lnD');

let servingDir = path.parse(__dirname).dir+'\\dist';
let port = process.env.PORT || 5000;

console.log(servingDir)

app.use(serveStatic(servingDir));
app.use(cookieParser('secret'));

app.use('/auth', (req, res)=>{
  console.log(req.url)
  if(req.query.m=='signup') res.sendFile(servingDir+'/reg.html')
  else res.sendFile(servingDir+'/auth.html');
})

app.get('/getuserinfo', (req, res)=>{
  let id = req.signedCookies["uid"];
  if(id) dbcon.getElement('users', [{field: 'id', value: '"'+id+'"'}],
  ['*'],
  (err, results)=>{
      if(err){
        console.log(err)
      }
      if(results.length==1){
        console.log('user authtorized 35')
        res.cookie('uid', results[0].id, {httpOnly: true, signed: true, maxAge: 60*60*24*365*2})
        console.log(results[0].id)
        console.log(req.signedCookies["uid"])
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({name: results[0].name}))
      }
  else{
    res.end('user is not authorized')
  }})
})

app.post('/reguser', jsonParser, (req, res)=>{
  console.log('trying add user')
  dbcon.addElement('users', [{field: 'name', value: req.body.name},{field: 'password', value: req.body.password},{field: 'anime', value: 'empty'}], (e, res)=>{
    if(e)console.log(e.message)
  })
  console.log(req.body)
  res.end('ssss');
})

app.post('/authuser', jsonParser, (req, res)=>{
  console.log('trying auth user')
  dbcon.getElement('users', [{field: 'name', value: '"'+req.body.name+'"'}, {field: 'password', value: '"'+req.body.password+'"'}],
  ['*'],
  (err, results)=>{
      if(err){
        console.log(err)
      }
      if(results.length==1){
        console.log('user authtorized 61')
        res.cookie('uid', results[0].id, {httpOnly: true, signed: true, maxAge: 60*60*24*365*2})
        console.log(results[0].id)
        console.log(req.signedCookies["uid"])
        res.end('user authorized')
      }
  else{
    res.end('user is not authorized')
  }
  })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})