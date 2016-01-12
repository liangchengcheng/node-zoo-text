var http=require('http');
var mysql=require('mysql');

var connection=mysql.createConnection({
  user : "root",
  password : "",
  database : "mydb"
});
var server=http.createServer(function(request,response){
  connection.query('select * from test',function(error,rows,fileds){
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.end(JSON.stringify(rows));
  })
});
server.listen(3000);