function logins(){
    var $names=$('#names');
    var $pw1=$('#pw1');
    var $btns=$('#btns');
//    console.log($btns)
    $btns.click(function(){
//        alert(1)
        var $namesVal=$names.val();
        var $pw1Val=$pw1.val();
        
        if($namesVal==''){
            alert('请输入用户名')
            return;
        }
        if($pw1Val==''){
            alert('请输入密码')
            return;
        }
        var info = 'status=login&userID=' + $namesVal+ '&password=' +$pw1Val;
        console.log(info)
        $.ajax({
            type:'post',
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            data:info,
            success:function(msg){
//                console.log(msg)
                if(msg==0){
                    alert('用户名不存在！')
                }
                if(msg==2){
                    alert('用户名重复！')
                }else{
                    alert('登陆成功，欢迎您回来！立刻为您跳转')
                    window.location.href='index.html'
                }
            }
        })
    })
}