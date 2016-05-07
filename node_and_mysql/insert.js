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

var article = {
  author: 'Danny Pule',
  title: 'Node tutorial',
  body: 'Lorem!'
};

var query = connection.query('insert into articles set ?', article, function(err, result){
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  process.exit(0);
});
