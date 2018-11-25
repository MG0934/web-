const http = require('http')
const fs = require('fs')
const mysql = require('mysql')
const io = require('socket.io')

let db = mysql.createConnection({
    host:'111.231.206.74',
    user:'root',
    password:'19930320mgg',
    database:'ws'
})

let httpServer = http.createServer((req,res)=>{
    fs.readFile(`www${req.url}`,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write('Not Found');
        }else{
            fs.write();
        }

        res.end();
    })
});

httpServer.listen(8080)