var http=require("http");
http.createServer(function(request,response)
{
if(request.url=="/")
{
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<h1>Hello World</h1>");
}
else if(request.url=="/student")
{
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<h1>Hello Student</h1>");
}
else if(request.url=="/admin")
{
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<h1>Hello Admin</h1>");
}
else
{
response.end("Invalid Request");
}
}).listen(3000);
console.log("Server running");
