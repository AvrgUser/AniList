var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var sqldb = require('./bd.js')
const cookieParser = require('cookie-parser')
const { nextTick } = require('process')
const { getSourceMapRange } = require('typescript')
const app = express();
const jsonParser = express.json();

let dbcon = new sqldb.DBConnection('194.190.152.244', '3306', 'u127_VOLDIZV7dD', 's127_anilist', '4=3M0drO0Hl.5Z4^GbzR.trh');

let servingDir = path.parse(__dirname).dir+'\\dist';
let port = process.env.PORT || 3009;

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

app.get('/getanimelist', jsonParser, (req, res)=>{ //req: https://[host]//getanimelist body: {"filters":["genre1", "genre2"]}
    let filters = req.body.filters;
    console.log(req.body)
    /*getItems(filters, (result)=>{
      res.end(JSON.stringify(result))
    })*/
    dbcon.getElement('anime', [``],
  ['*'],
  (err, responce)=>{
    let ans = []
    for(let i = 0; i<responce.length;i++){
      ans[i] = responce[i]
    }
    res.end(ans)
  })
})

app.post("/signout", (req, res)=>{
  res.clearCookie('uid')
  console.log('user signed out')
  res.end('signed out')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/ (Bot is online)`)
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
  if(!accesable){
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
        callback(undefined)
      }
    }
  })
}

function getItems(tags, age, rating, likes, callback){
  dbcon.getElement('anime', [``],
  ['*'],
  (err, res)=>{
    if(err){
      console.log(err)
      callback(undefined)
    }
    else{
      console.log(tags)
      if(tags!=undefined){
        let needed = []
        let relevance = []
        for(let i =0, t=0;i<res.length;i++){
          let found = false
          console.log('aboba')
          for(let j=0;j<tags.length;j++){
            console.log(tags, res[i].genre)
            let filters = ((String)(res[i].genre)).split('/')
            if(filters.includes(tags[j])){
              console.log('added')
              if(needed[t]==undefined)needed[t] = res[i]
              if(relevance[t]==undefined) relevance[t]=0
              relevance[t]++
              if(!found)t++
              found = true
            }
          }
        }
        res = needed
      }
      callback(res)
    }
  })
}