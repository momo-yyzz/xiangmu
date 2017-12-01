let express = require('express')
let app = express();

app.get('/',function (req,res){
    res.send('ok')
})
app.get('/list',function (req,res){
    res.send('list')
})
app.get('*',function (req,res){
    res.send('404不存在')
})

app.listen(3000)
