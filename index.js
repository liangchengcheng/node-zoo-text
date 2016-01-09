var httpServer=require('http');
var url=require('url');
//解析参数的库
var qs=require('querystring');

var server=httpServer.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello LCC");
  response.end("ok");
});
server.listen(3000);

/**
 * 客户端请求回调函数
 * @param req
 * @param resp
 */
function onRequest(req,resp){

  var parseRlt=url.parse(req.url).query;
  //判断非空
  var parseRlts=url.parse(req.url,true).query;

  console.log(parseRlts.name);
  console.log(parseRlt);

  //获取get请求的值
  var nameValue=qs.parse(parseRlt)['name'];

  console.log(nameValue);

  resp.writeHead(200);
  resp.write('hello');
  resp.end();
}