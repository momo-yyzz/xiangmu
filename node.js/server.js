//创建一个http服务器
const http = require('http');

const server = http.createServer(function(request,response){
	//console.log('请求服务器');
	response.write('hellow world');
	response.end();
});
server.listen(8080);
