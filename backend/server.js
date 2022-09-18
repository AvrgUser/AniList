var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var sqldb = require('./bd.js')
const cookieParser = require('cookie-parser')
const { nextTick } = require('process')
const { getSourceMapRange } = require('typescript')
const app = express();
const jsonParser = express.json();

let dbcon = new sqldb.DBConnection('164.132.6.35', '3306', 'u67_Q5fQrUb01b', 's67_anilist', '9A+J=o^u8b=lhvi1Z7NuIa2J');

let servingDir = path.parse(__dirname).dir+'/dist';
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
        console.log('user authorized 35')
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
  getUser({name: req.body.name}, (result)=>{
    if(result!=undefined) {
      console.log('user registration failed')
      res.end('user is not registered')
    }
    else{
      dbcon.addElement('users', [{field: 'name', value: req.body.name},{field: 'password', value: req.body.password},{field: 'anime', value: 'empty'}], (e)=>{
      if(e)console.log(e.message)
      dbcon.getElement('users', [{field: 'name', value: '"'+req.body.name+'"'}], ['*'], (err, result)=>{
        if(err) console.log(err)
        else{
        res.cookie('uid', result[0].id, {httpOnly: true, signed: true, maxAge: 60*60*24*365*2})
        res.end('user registrated')
        console.log('user registered')
        }
      })
    })
  }
  })
  console.log(req.body)
})

app.post('/authuser', jsonParser, (req, res)=>{
  console.log('trying auth user')
  console.log(typeof(req))
  getUser({name: req.body.name, password : req.body.password},(result)=>{
    if(result==undefined) {
      console.log('user is not authorized')
      res.end('user is not authorized')
    }
    else{
    console.log('user authorized 61')
    res.cookie('uid', result.id, {httpOnly: true, signed: true, maxAge: 60*60*24*365*2})
    console.log(result.id)
    console.log(req.signedCookies["uid"])
    res.end('user authorized')
    }
  })
})

app.post("/signout", (req, res)=>{
  res.clearCookie('uid')
  console.log('user signed out')
  req.end('signed out')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})




async function getUser(userParams, callback){
  let fields = []
  let i = 0
  let accesable = false
  if(userParams.name.length>0) {
    fields[i] = {field: 'name', value: '"'+userParams.name+'"'}
    i++
    accesable = true
  }
  if(userParams.password!=undefined)if(userParams.password.length>0) {
    fields[i] = {field: 'password', value: '"'+userParams.password+'"'}
    i++
  }
  if(userParams.id!=undefined) {
    fields[i] = {field: 'id', value: '"'+userParams.id+'"'}
    i++
    accesable = true
  }
  console.log(fields)
  if(!accesable) {
    console.log('failed to get user info on building request')
  }
  else
  dbcon.getElement('users', fields,
  ['*'],
  (err, res)=>{
    if(err) console.log(err);
    else{
      if(res.length<=1) callback(res[0])
      else{
        console.log(`warning! probably two users share the same data on ${res[0].id}`)
      }
    }
  })
}

class UserParams{
  name
  password
  id
}