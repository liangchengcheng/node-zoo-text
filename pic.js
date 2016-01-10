var http =require('http');
var qs=require('querystring');
var formidable=require('formidable');
var  sys=require('sys');

//npm install formidable

function onRequest(request,response){
  if(request.url=='/upload'&&request.method.toLowerCase()=='post'){
    console.log('upload');
    uploadRequest(request,response);
  }
  enterRequest(request,response);
}

function enterRequest(request,response){
  response.writeHead(200,{
    'Content-Type':'text/html'
  });
  response.end(
      '<form action="/upload" enctype="multipart/form-data" method="post">'+
      '<input type="text" name="title" /><br>'+
      '<input type="file" name="upload" multiple="multiple"/>'+
      '<input type="submit" value="upload now">'+
      '</form>'
  );
}

/**
 * 处理上传文件
 * @param request
 * @param response
 */
function uploadRequest(request,response){
  var form=new formidable.IncomingForm();
  form.parse(request,function(err,fields,files){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('reviced upload file');
    response.end(sys.inspect({
      fields:fields,
      files:files
    }));
  })
}

var server=http.createServer(onRequest);
server.listener(3000);
console.log('Server is Loading!');

