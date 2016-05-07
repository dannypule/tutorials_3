var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'articles',
  'socketPath': '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock',
  'port': 8889
});

connection.connect();

var id = '2; drop table articles;';

var query = connection.query('select * from articles where id=?', id, function(err, res){
  if (err) {
    console.log(err);
    return
  }

  console.log(res);
  console.log('------');
  console.log(query.sql);
  process.exit(0);
});
