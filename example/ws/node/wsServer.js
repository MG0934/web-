const http = require('http')
const fs = require('fs')
const mysql = require('mysql')
const io = require('socket.io')
const regs = require('./libs/regs.js')

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

//web socket 服务器

let aSock  = [];

let wsServer = io.listen(httpServer);

wsServer.on('connection',sock=>{

    aSock.push(sock);

    let username='';

    let userID = 0;

    sock.on('reg',(user,pass)=>{
        //1.校验数据

        if(!regs.username.test(user)){
            sock.emit('reg_ret',1,'用户名不符合规范');
        }else if(!regs.password.test(pass)){
            sock.emit('reg_ret',1,'密码不符合规范');
        }else{
            db.query(`select ID from user where username = '${user}'`,(err,data)=>{
                if(err){
                    sock.emit('reg_ret',1,'数据库有错，稍后充试');
                }else if(data.length>0){
                    //2.用户名是否存在
                    sock.emit('reg_ret',1,'用户名已存在');
                }else{
                    //3.插入数据
                    db.query(`insert into user (username,password,online) values('${user}','${pass}',0)`,err=>{
                        if(err){
                            sock.emit('reg_ret',1,'数据库保存失败');
                        }else{
                            sock.emit('reg_ret',0,'注册成功,请登录');
                        }
                    })
                }
            })
        }
    });

    sock.on('login',(user,pass)=>{
        if(!regs.username.test(user)){
            sock.emit('login_ret',1,'用户名不符合规范');
        }else if(!regs.password.test(pass)){
            sock.emit('login_ret',1,'密码不符合规范');
        }else{
            db.query(`select ID from user where username = '${user}'`,(err,data)=>{
                if(err){
                    sock.emit('login_ret',1,'数据库有错，稍后充试');
                }else if(data.length<=0){
                    //2.用户名是否存在
                    sock.emit('login_ret',1,'用户名不存在，请先登录');
                }else{

                    username = user;

                    data.forEach(item=>{
                        userID = item.ID;
                    })

                    //3.更新数据
                    db.query(`update user set online = 1 where ID = '${userID}'`,err=>{
                        if(err){
                            console.log('更新数据库错误',err)
                        }
            
                    sock.emit('login_ret',0,username);
                    });
                }
            })
        }
    })

    //发言
    sock.on('msg',txt=>{

        console.log(`接收到来自'${username}'的消息,内容为:'${txt}'`)

        if(username==''){
            sock.emit('msg_ret',1,username,'用户未登陆，请先登录！');
            return ;
        }

        if(!txt){
            sock.emit('msg_ret',1,username,'消息文本不能为空');
        }else{
            //广播给所有人
            aSock.forEach(item=>{
                if(item==sock){
                    return
                }else{
                    item.emit('msg',0,username,txt);
                };
            })

            sock.emit('msg_ret',0,username,'发送成功');
        }
    })


    //离线

    sock.on('disconnect',function(){
        db.query(`update user set online = 0 where ID = '${userID}'`,err=>{
            if(err){
                console.log('更新数据库错误',err)
            }

            username='';

            userID = 0;

            aSock = aSock.filter(item=>item!=sock);
        });
    });
});
console.log('服务器启动完成！--------------------------')

