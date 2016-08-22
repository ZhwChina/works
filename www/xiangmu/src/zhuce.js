function sign() {
    var $ID = $('#names');
    var $pw1 = $('#pw1');
    var $pw2 = $('#pw2');
    var $btn = $('#postcheck');
    var $checkBox = $('#little')
    var phonecheck = /^1\d{10}$/
    var mailcheck = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    $btn.click(function () {
        if (phonecheck.test($ID.val()) || mailcheck.test($ID.val())) {

        } else {
            alert('用户名输入错误！')
            return;
        }
        if ($pw1.val() != $pw2.val()) {
            alert('密码输入不一致！')
            return;
        }
        if(!$checkBox.prop('checked')){
            alert('请阅读协议后选中复选框')
            return;
        }
        if (phonecheck.test($ID.val()) || mailcheck.test($ID.val()) && $pw1.val() == $pw2.val()&&$checkBox.prop('checked')) {
            var info = 'status=register&userID=' + $ID.val() + '&password=' + $pw1.val();
            $.ajax({
                type: 'post',
                url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
                data: info,
                success: function (msg) {
//                                        console.log(msg)
//                    alert(msg)
                    if(msg==0){
                        alert('用户名已被注册！')
                    }
                    if(msg==1){
                        alert('注册成功！点击确定为您跳转至首页')
                        window.location.href='index.html'
                    }

                },
                statusCode: {
                    404: function () {
                        alert('page not found');
                    }
                }
            })
        }

    })






    //    var info = 'status=register&userID=' + $ID.val + '&password=' + $pw1.val;
    //    console.log(info)
//    $.ajax({
//        type: 'post',
//        url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
//        data: info,
//        success: function (msg) {
//            //                    console.log(msg)
//            $btn.click(function () {
//                if (msg == 1 && $pw1.val() == $pw2.val()) {
//                    alert('welcome to join us with' + msg);
//                } else {
//                    alert('wrong')
//                }
//            })
//
//        },
//        statusCode: {
//            404: function () {
//                alert('page not found');
//            }
//        }
//    })
}