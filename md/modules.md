### 模块化
---
#### 民间的 sea.js require.js
- 定义模块 mod1.js
```JavaScript
    define(function(require,exports,module){
        //exports导出
        //module 批量导出
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
#### node.js

#### ES6