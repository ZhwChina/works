 /*ajax({
     type: 'post',    //确定请求方式(默认get)
     isAysn: true,    //是否异步(默认true)
     url: 'http://datainfo.duapp.com/shopdata/userinfo.php',     //请求路径
     data: 'status=login&userID=qianfengdl1604&password=123456',   //数据
     success: function (msg) {                                 //回调函数
         console.log(msg)
     }
 })*/


 function ajax(opt) {
     //创建请求对象
     var req = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
     //设置默认值
     var type = opt.type || 'get';
     var isAysn = opt.isAysn >= 0 ? opt.isAysn : true;
     //设置路径，请求方式，是否异步
     if (type == 'get') {
         req.open('get', opt.url + (opt.data ? '?' + opt.data : ''), isAysn);
         req.onreadystatechange = function () {
             if (req.readyState == 4 && req.status == 200) {
                 var result = req.responseText;
                 if (opt.success) {
                     opt.success(result)
                 }
             }
         }
         req.send(null);
     } else if (type == 'post') {
         req.open('post', opt.url, isAysn);
         req.onreadystatechange = function () {
             if (req.readyState == 4 && req.status == 200) {
                 var result = req.responseText;
                 if (opt.success) {
                     opt.success(result)
                 }
             }
         }
         if (opt.data) {
             req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
             req.send(opt.data)
         } else {
             req.send(null)
         }
     }
 }