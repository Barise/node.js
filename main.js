var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url,true).pathname;
  var title = queryData.id;
  var testFolder = './data/';
  
    if(pathname==='/'){
      //파일 목록 읽음
      fs.readdir(testFolder,function(error,filelist){
        var list='<ul>';
        var i = 0;

        while(i<filelist.length-1){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i++;
        }

        list = list+'</ul>';
        //index page
      if(title===undefined){
        title ='Welcome';
        var description = 'Hello, Node.js';

        
          var template = `
          
          <!doctype html>
          <html>
          <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          </head>
          <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
          </body>
          </html>
          `;
          //http상태코드 2xx은 성공
          response.writeHead(200);
          response.end(template);
          }

          //url
          else{
              fs.readFile(`${testFolder}${title}`,'utf8',function(error,description){
              var template = `
                <!doctype html>
                <html>
                <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                <h2>${title}</h2>
                <p>${description}</p>
                </body>
                </html>
              `;
              //http상태코드 2xx은 성공
              response.writeHead(200);
              response.end(template);
                })
              }
            })
        } 
        //예외처리
        else {
          response.writeHead(404);
          response.end("Not found");
        } 
    });
app.listen(3000);