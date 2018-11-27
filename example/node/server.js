const http = require('http')

let server = http.createServer(function(request,response){
    
    // console.log(`${request.url}`)
    // console.log(`${request.method}`)
    // console.log(`------------------`)

    // response.write('ancd')
    // response.write('ancd22')
    // response.end();

    if(request.url=='/aaa'){
        response.write('aaaa')
    }else{
        response.write  (404)
    }

    response.end;
});

server.listen(8080)

console.log('启动成功！')
console.log('------------------')

