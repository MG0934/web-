### 字符串
---
#### startWith与endWith
        1.startWith 以什么开头
        2.endWith 以什么结尾
```JavaScript

    let url = 'http://tryrun.cn'
    
    //startWith
    if(url.startWith("http")){
        alert('普通网站')
    }

    //endWith
    let file = '1.txt'

    if(file.endWith('.txt'))}{
        alert('文本文件')
    }

```
#### 字符串模板
- 使用 `` 反单引号

    - 可以直接把值放到字符串,${info}
    - 可以换行书写,不用使用\

```JavaScript
    //例1
    let a = 34;

    let str = `12${a}5`

    console.log(str)

    //例2
    let str = '<div>\
    <h1>'+title+'</h1>\
    <p>'+content+'</p>\
    </div>'

    let str2 = `<div><h1>${title}
    </h1><p>${content}</p></div>`

```