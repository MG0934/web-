const http = require('http')
const io = require('socket.io')

const httpserver = http.createServer();
httpserver.listen(8080)

const wsServer = io.listen(httpserver);

wsServer.on('connection',sock=>{
    sock.on('a',function(n1,n2,n3,n4,n5){
        console.log(n1)
    })
})


