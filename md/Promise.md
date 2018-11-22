### promise
---
#### all
- 承诺,用同步的方式来写异步代码
- all 全得成功
```javaScript
    
    //resolve 成功
    //reject 拒绝
    let p1 = new Promise(function(resolve,reject){

        $.ajax({
            url:'arr.txt',
            dataType:'json',
            success(arr){
                resolve(arr)
            },
            error(err){
                reject(err)
            }
        })

    });

    let p2 = new Promise(function(resolve,reject){

    $.ajax({
        url:'json.txt',
        dataType:'json',
        success(arr){
            resolve(arr)
        },
        error(err){
            reject(err)
        }
    })

    });

    //第一个函数就是resolve 第二个函数就是reject
    p1.then(function(){

    },function(){

    });

    //对于多个promise 通过promise.all 判断 全都成功了，或者至少一个失败了
    //成功的返回值就是数组格式，可以通过结构赋值进行复制
    Promise.all([p1,p2]).then(function(arr){

    },
    function(err){

    });

    //但是上面的创建了两个permise有大量重复代码

    function createPromise(url){
        return new Promise(function(resolve,reject){

        $.ajax({
            url,
            dataType:'json',
            success(arr){
                resolve(arr)
            },
            error(err){
                reject(err)
            }
        })
        });
    }

    Promise.all([createPromise('arr.txt'),createPromise('json.txt')]).then(
        function(arr){

        },
        function(err){
        }
    )

    //但是ajax的高版本，已经封装了promise 所以还能简化
    Promise.all([
        $.ajax($.ajax({url:'arr.txt',dataType:'json'}),$.ajax({url:'json.txt',dataType:'json'}])
        .then(function(arr){

        },
        function(err){
    })

    //进一步简化
    Promise.all([
        $.ajax($.ajax({url:'arr.txt',dataType:'json'}),$.ajax({url:'json.txt',dataType:'json'}])
        .then(result=>{

        },
        err=>{

        })
```
#### race
- 谁先来用谁,只要有一个成功
```JavaScript

    Promise.race([
        $.ajax({url:'arr.txt',dataType:'json'}),
        $.ajax({url:'json.txt',dataType:'json'}),
        $.ajax({url:'cs.txt',dataType:'json'}),
        $.ajax({url:'aa.txt',dataType:'json'})
    ]).then(results=>{

    },err=>{

    })
```

#### 手写Permise