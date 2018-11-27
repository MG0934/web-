//3.接收数据
this.onmessage=function(ev){
    console.log(ev.data)
    //4.处理数据
    this.postMessage(ev.data.n1 + ev.data.n2);
}