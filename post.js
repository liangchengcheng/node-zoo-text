var http =require('http');
var qs=require('querystring');
function onRequest(request,response){
  response.writeHead(200,{
    'Content-Type':'text/plain'
  });

  if(request.url=='/login'&&request.method.toLowerCase()=='post'){
    var postData='';
    request.addListener('data',function(data){
      //正在获取参数
      postData+=data;
    });

    request.addListener('end',function(){
      response.write(postData);
      var ct=qs.parse(postData).text;
      response.write('参数是'+ct);
      response.write('post');
      response.end();
    })
  }else{

  }

  response.write(content);
  response.end();
}
/**
 * 路由控制
 * @param request
 */
function rotute(request){

}

var server=http.createServer(onRequest);
server.listener(3000);
console.log('Server is Loading!');

