var httpServer=require('http');
var url=require('url');
//解析参数的库
var qs=require('querystring');

var server=httpServer.createServer(onRequest);
server.listen(3000);
initRotute();

/**
 * 客户端请求回调函数
 * @param req
 * @param resp
 */
function onRequest(req,resp){

  //请求的路径
  var request_path=req.url;
  resp.writeHead(200,{'Content-Type':'text/html'});
  var res_th=rotuteHandle(request_path);
  resp.setEncoding('utf-8');
  resp.write('信息<b>',res_th);
  resp.end();
}

var handlePaths=[];

/**
 * 初始化路由
 */
function initRotute(){
  handlePaths.push('/');
  handlePaths.push('/login');
  handlePaths.push('/register');
}

/**
 * 处理路由的逻辑
 * @param path
 */
function rotuteHandle(path){
  for(var  i in handlePaths){
    //遍历路由要是我们发现信息一致的时候就返回
    handlePaths[i]
    if(handlePaths[i]==path){
      return handlePaths[i];
    }
  }
  return '404 not found';
}

