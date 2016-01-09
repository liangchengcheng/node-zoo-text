var httpServer=require('http');

var server=httpServer.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello LCC");
  response.end("ok");
});
server.listen(3000);