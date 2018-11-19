###基础
---
#### 变量let和const
- var 缺点
    
    - 重复定义不报错
    - 没有块级作用于
    - 不能限制别人的修改
```JavaScript
    //重复定义不报错

    var a = 12;

    var a = 15;

    alert(a);
    //输出15

    //没有块级定义域
    if(a>13){
        ......
    }

    alert(a)
    //a 有输出存在

    //无法限制别人的修改
    var a =12;
    //别人的修改
    a= 15;
```
- const 常量

    - 不可修改
```JavaScript
    const a = 12;
```
- let 变量
    
    - 重复定义会报错
    - 有块级定义域
```JavaScript
    let a = 12;

    if(a>15){
        ....
    }
    //console 不存在
```

#### 箭头函数
- 取代function
- 只有一个参数 ()可以省略
- 如果只有一个return语句 {} 可以省略
```JavaScript
    //原函数1
    function(a,b,c){
        //代码
    }

    //简写
    (a,b,c)=>{//代码}

    //原函数2
    function (a){
        return a;
    }
    //简写
    a=>a;
    
    //原函数3
    function (a,b){
        return a+b;
    }
    //简写
    (a,b)=>a+b;

    //应用场景

    let arr=[1,4,2,56,2]
    //原函数
    arr.sort(function(a,b){
        return a-b;
    })
    //简写
    arr.sort((a,b)=>a-b)
```

#### 参数
- 参数扩展,类似于java的可变参
- 必须放到最后,不能放到中间
```JavaScript

    function show(a,b,...args){
        console.log(args)
    }

    show(1,2,4,5,6)

    //console 4,5,6

    let arr1=[1,2,3]
    let arr2=[4,5,6]
    let a = [...arr1,...arr2]
    console.log(1,2,3,4,5,6)
    //console 1,2,3,4,5,6
```
