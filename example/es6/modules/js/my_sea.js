const sea = {
    use(path, fe_end) {

        $.ajax({
            url: path,
            success(str) {
                parseStr(str, fe_end);
                function parseStr(str, fe_end) {

                    let json = [];

                    function define(fn) {

                        let modules = { exports: {} }
                        //复制前，绑定函数

                        if(json.length>0){
                            for (let index = 0; index < json.length; index+=2) {
                                key = json[index];
                                value = json[index+1];
                                modules.exports[key]=value
                            }
                        }
                        fn(function () {

                        }, modules.exports, modules);


                        fe_end(modules.exports, modules)
                    }


                    //解析所有代码的require
                    let tmp = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));

                    let paths = tmp.match(/require\(.*\)/g);

                    if (!paths) {
                        //执行代码
                        eval(str);
                    } else {
                        paths = tmp.match(/require\(.*\)/g).map(item => {
                            if (item.indexOf('"') != -1) {
                                return item.substring(item.indexOf('\"') + 1, item.lastIndexOf('\"'));
                            } else {
                                return item.substring(item.indexOf("\'") + 1, item.lastIndexOf("\'"));
                            }
                        })

                        pathName=tmp.match(/.*require\(.*\)/g).map(item=>{
                          return item.split("=")[0].trim().split(" ")[1]
                        })

                        let i = 0;
                        
                        if(i===0 && paths.length!==0){
                            next()
                        }

                        function next() {
                            $.ajax({
                                url: paths[i],
                                success(pathstr) {
                                    parseStr(pathstr, function (fe_end) {

                                        json.push(pathName[i])

                                        json.push(fe_end)
                                    });

                                    i++;

                                    if (i === paths.length) {
                                        //拼装对象

                                        pathName.forEach(element => {
                                            var reg = RegExp("require\(\.*js\/"+element+"\.js\.*\)");
                                            str =  str.replace(reg,"exports."+element)
                                        });
                                        eval(str);
                                    } else {
                                        next()
                                    }
                                },
                                error() {

                                }
                            })
                        }
                    }
                }
            },
                error(err) {
                    alert('失败')
                }
            });
    }
}