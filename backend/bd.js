import Connection from "mysql2/typings/mysql/lib/Connection";

const mysql = require("mysql2");

export default class createDBConnection{
  constructor(_host, _port, _user, _database, _password){
    console.log(`process id is ${process.pid}`)
    
    const connection = mysql.createConnection({
      host: _user,
      port: _port,
      user: _user,
      database: _database,
      password: _password
    });
    
    connection.connect(function(err){
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
        console.log("Подключение к серверу MySQL успешно установлено");
      }
    });
  }

  // addElement = (table, args, callback)=>{
  //   this.connection.query
  // }

  connection = new Connection();
}

