### 面向对象
---
#### class
```JavaScript
    //原对象写法

    function User(name,password){
        this.name=name;
        this.password=password;
    }

    User.prototype.ShowName(){
        alert(this.name)
    }    

    //原对象写法，整个类分散了，方法和属性不在一起

    //新写法,构造器和类分开了,方法不用分离

    class User{

        constructor(name,pass){
            this.name = name;
            this.pass = pass;
        }

        showName(){
            alert(this.name)
        }

    }

    //新写法的优势在于继承

     class Animal{
         constructor(){

         }
     }

     class Cat extend Animal(){
         constructor(){
             super()
         }
     }
```
