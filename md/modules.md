### 模块化
---
#### 民间的 sea.js require.js
- 定义模块 mod1.js
```JavaScript
    define(function(require,exports,module){
        //exports导出
        //module.exports={} 批量导出
        exports.a=12;
        exports.b=5;

        exports.show=function(){

        }
    })
```

- 引入模块 mod1.js
```JavaScript

Seajs.use(['mod1.js','xxx.js',...],function(mod1,mod2,...){

})

```
- 引入模块依赖其他模块 mod2.js
```JavaScript
    define(function(require,exports,module){
        
        let moda = require('../a.js')
        let modb = require('../b.js')

        exports.num = moda.num + modb.num;
    })
```

a.js
```JavaScript

define(function(require,exports,module){
        exports.num=12;
    })

```

b.js
```JavaScript

define(function(require,exports,module){
        exports.num=13;
    })

```


引入模块 mod1.js
```JavaScript

Seajs.use(['mod3.js'],function(mod1){
    let a = mode1.num;
})

```


- 使用场景,按需加载
```JavaScript

if(login){
    Seajs.use(['login.js'],function(mod1){
       
    })
}else{
    Seajs.use(['user.js'],function(mod1){
        
    })
}

```

- 原理实现
[sea.js原生实现,只能实现一层require依赖导入,存在多层处理问题,属于js原理理解不到造成](../example/es6/modules/modules.html)
#### node.js
- 没有use 都是js与js的关系

```JavaScript 1.js

    let a=require('../a.js');

    let b=require('../b.js');

    console.log(a.num + b.num)

```
    node模块化：
        1.没有define
        2.exports,require,module
        3.引入自定义模块两种方式：
            3.1 放到node_modules
            3.2 前面加./
```
    //todo创建发布包
```

#### ES6
- import
- export
```JavaScript export.js

    let a = 12;
    let b = 5;
    
    export{a,b};

```

```JavaScript import.html

    import mod1 from 'js/1.js'

    let a = mod1.a
    let b = mod1.b

```
    es6代码无法再低版本浏览器直接运行,需要通过工具编译
#### babel
- 安装
######
    npm install -g babel
 