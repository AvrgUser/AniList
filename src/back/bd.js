const mysql = require("mysql2");


console.log(`process id is ${process.pid}`)

const connection = mysql.createConnection({
  host: "176.126.103.146",
  port: "3306",
  user: "u67_yuHgwq9HhW",
  database: "s67_anilist",
  password: "UvT9Qn4c!58Q3pUnL4zi4lnD"
});

connection.connect(function(err){
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else{
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

connection.query("SELECT * FROM users",
  function(err, results) {
    if(err) console.log(err)
    console.log(results);
});

connection.end();
