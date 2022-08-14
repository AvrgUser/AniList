const mysql = require("mysql2");

class DBConnection{
  constructor(_host, _port, _user, _database, _password){
    console.log(`process id is ${process.pid}`)
    
    this.connection = mysql.createConnection({
      host: _host,
      port: _port,
      user: _user,
      database: _database,
      password: _password
    });
    
    this.connection.connect(function(err){
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
        console.log("Подключение к серверу MySQL успешно установлено");
      }
    });
  }

  addElement = (table, args, callback)=>{
    let values = '', fields = '';
    for(let i =0; i< args.length; i++){
      values+=`'`+args[i].value+`'`
      fields+='`'+args[i].field+'`'
      if(i+1<args.length){
        values+=', '
        fields+=', '
      }
    }
    let req=`INSERT INTO `+'`'+`${table}`+'`'+` (${fields}) VALUES (${values});`
    console.log(req)
    this.connection.query(req, callback)
  }

  connection
}

module.exports= {
  DBConnection
}