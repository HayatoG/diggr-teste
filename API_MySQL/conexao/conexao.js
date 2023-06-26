const mysql = require('mysql2');

const dbconexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql123',
  database : 'testeempresa'
});
dbconexao.connect(function(err) {
  if (err) throw err;
  console.log("Conectado ao banco!");
});
module.exports = dbconexao;