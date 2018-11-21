const sea = {
    use(path, fe_end) {
        $.ajax({
            url: path,
            success(str) {
                function define(fn) {
                    let modules = {
                        exports: {}
                    }
                    fn(function () {

                    },
                    modules.exports,
                    modules
                    );
                    fe_end(modules.exports,modules)
                }
                //解析所有代码的require

                //执行代码
                eval(str);
            },
            error(err) {
                alert('失败')
            }
        });
    }
}