var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dlftlsdn12',
  database : 'opentutorials'
});
 
connection.connect();
 //function 이 callback임
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error){
      console.log(error);
  };
  console.log(results);
});

connection.end();