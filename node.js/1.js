////console.log(111)
//
//var str = 'sajsa';
//console.log(str.substring(2))
//var arr = [];
//arr.push(1);
////console.log(arr)



const http = require('http');//直接下载下来的模块不用路径，如果
			
const fs = require('fs');//专门用来操作本地文件

http.createServer((req,res)=>{
	//urlName是前端发送的信息
	let urlName = req.url;
	let na = 'www';
	//console.log(urlName);//  /index.html
	if(req.url!=='/favicon.ico'){
		//na+urlName = www/index.html
		fs.readFile(na +urlName,function(){
			if(err){//如果文件没有读取出来走err
				res.write('404');
			}else{
				//文件读取出来，data->Buffer格式的，需要使用
				res.write(data.toString());
			}
			res.end();
		})
	}
}).listen(8080);
