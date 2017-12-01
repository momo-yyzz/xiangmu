console.log('111');

/* let app = require('./app.js')
let miaov = require('miaov')

console.log(miaov)

console.log(app.add(1,2)); */

let http = require('http')
//http模块的作用：启动服务

//创建服务
//当有客户端访问，就会立马执行这个回调函数
let app = http.createServer(function (req,res){
    console.log('有人访问了');
    //要回应客户端
    //res.write('hallow)
    res.end('hallow');
})
app.listen(3000)