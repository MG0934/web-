
const mysql = require('mysql')

let db = mysql.createConnection({
    host:'111.231.206.74',
    user:'root',
    password:'19930320mgg',
    database:'ws'
})

db.query('select * from user',(err,data)=>{

    if(err){
        printInfo(info);
    }else{
        printInfo(data);
    }
})


function printInfo(info){
    console.log(info);
}