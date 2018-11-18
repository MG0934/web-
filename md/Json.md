### Json
---
#### Json的方法
- json的标准写法

    - 只能用双引号
    - 所有的可以必须用引号包起来

```JavaScript
    let json = {a:10,b:5}

    //对象转字符串 stringity
    let str = 'http://www.tryrun.cn'+encodeURIConponet(Json.stringity(json))

    //字符串转对象
    let str = '{"a":10,"b":5}';

    let json = Json.parse(str)

    //Json 的简写
    // 名字与值一样的时候保留一个就行
    let json = {a,b,c:12}

    //如果json里边有方法，删除:function
    let json={
        a:2,
        show:function(){
            alert(123);
        }
    }

    let json={
        a:2,
        show(){
            alert(123);
        }
    }

```