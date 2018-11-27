### HTML5-1
---
- geolocation
- video audio
- localStorage 废弃
- WebSql/IndexedDB 废弃
- WebWorker 多线程
- 文件操作,拖拽
- manifest 废弃
- canvas
#### geolocation 定位
- IP
- GPS
##### IP
    ip定位,通过公网IP分配的段对应的地址的不同,推断出相应的地址
    浏览器会通过相应的地址去获取相应的地区信息，chrome浏览器可能会由于历史原因，获取不到数据。
    可以直接拿ip地址在`http://www.myip.cn/`查询具体地址。
##### GPS

    window.navigator.geolocation
    单次： getCurrentPosition(成功,失败,参数)
    监听： watchPosition(成功,失败,参数)

- getCurrentPosition
```JavaScript

        window.onload = function () {

            let oBtn = document.getElementById('btn1')

            oBtn.onclick = function () {
                if (window.navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        res => {
                            console.log(res)
                            alert('成功')
                        }, err => {
                            console.log(err)
                            alert('失败')
                        }, {
                            //高精度模式
                           // enableHighAccuracy: boolean,
                            //超时时间
                          // timeout: long,
                            //缓存时间
                           // maximumAge: long
                        }
                    )
                } else {
                    alert('你的浏览器不支持定位')
                }
            }

        }
```
[position.html](../example/html5/position-getCurrentPosition.html)

- watchPosition
```JavaScript
 window.onload = function () {

            let oBtn = document.getElementById('btn1')

            oBtn.onclick = function () {
                if (window.navigator.geolocation) {
                 let watchId =   navigator.geolocation.watchPosition(
                        res => {
                            console.log(res)
                            alert('成功')
                        }, err => {
                            console.log(err)
                            alert('失败')
                        }, {
                            frequency:100
                        }
                    )
                } else {
                    alert('你的浏览器不支持定位')
                }

                window.navigator.clearwatch(watchId)
            }

        }
```
[position.html](../example/html5/position-watchPosition.html)

#### video audio
- video 播放视频
    - 支持格式 webq,mp4
    - 通用格式 mp4
- audio 

##### video
      <video src="" autoplay="" loop="loop" poster=""></video>
      src 地址
      autoplay 自动播放
      loop='loop' 循环播放
      poster 封面图片
      controls="controls" 显示控制按钮
      preload="auto" 预加载 
      height 高度像素
      width 宽度像素
[video.html](../example/html5/video.html)

##### audio
      <audio src="" autoplay="" loop="loop" poster=""></audio>
      src 地址
      autoplay 自动播放
      loop='loop' 循环播放
      poster 封面图片
      controls="controls" 显示控制按钮
      preload="auto" 预加载
##### js接口
    方法
    .play() 播放
    .pause() 暂停
    属性
    .currentTime 当前播放时间 秒
    .duration 整个视频长度 秒
    .volume 音量 0-100
    .muted 静音 true false
#### 多进程 webworker
- 多进程,性能低,编写简单
    - java
    - c
    - js
- 多线程,性能高,编写复杂
    
    - java
    - c
```
    js的进程分为两部分
        1.主进程 web浏览器端 ui部分
        2.子进程(工作进程) 看不见的,只能完成计算,数据请求这些操作
```

实现代码:
    webWorker.html
```JavaScript

    <script>
        
        window.onload=function(){

            let oBtn = document.getElementById("btn1")
            let oTxt1 = document.getElementById("txt1")
            let oTxt2= document.getElementById("txt2")

            oBtn.onclick=function(){
                let n1 = parseInt(oTxt1.value)
                let n2 = parseInt(oTxt2.value)

                //1.召唤子进程
                let wk = new Worker('./static/js/wk.js');

                console.log(wk)
                //2.发送数据
                wk.postMessage({n1,n2})

                //6.接收结果
                wk.onmessage=function(ev){
                    alert(ev.data)
                }
            }
        }

    </script>

```
    wk.js
```JavaScript
    //3.接收数据
    this.onmessage=function(ev){
        console.log(ev.data)
        //4.处理数据
        let result = ev.data.n1 + ev.data.n2
         //5.发送数据
        this.postMessage(result);
    }
```
[WebWorker.html](../example/html5/webWorker.html)
- 优点

    - 充分利用计算机资源(多个进程同时工作)
    - 防止主线程卡死

- 缺点

    - 不能执行任何UI操作
