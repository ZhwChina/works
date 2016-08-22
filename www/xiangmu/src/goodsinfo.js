function topHide() {
    var $hideBox = $('#navhidebox');
    var $li = $('#ulR').children('li').eq(0);
    var $as = $li.find('a');
    var $li2 = $('#ulR').children('li').eq(1);
    var $li3 = $('#ulR').children('li:last');
    var $moreBox1 = $('#topnav').children('div:first');
    var $moreLis1 = $moreBox1.children('li');
    var $moreBox2 = $('#topnav').children('div').eq(1);
    var $moreLis2 = $moreBox2.children('li');
    var $li2Img = $li2.find('img');
    var $allA = $('#ulR').find('a');

    $allA.each(function () {
        $(this).hover(function () {
            $(this).css('color', 'orange');
        }, function () {
            $(this).css('color', '#333')
        })
    })
    $li.hover(function () {

        $hideBox.css('display', 'block')
        if ($hideBox.html() == '') {
            $hideBox.append('<span class="hidespan">您还没有挑选商品，快去挑选吧！</span>');
        }
        $li.css('border-color', '#ccc')
    }, function () {
        $hideBox.css('display', 'none')
    })

    $li2.hover(function () {
        $li2Img.attr('src', 'imgs/jiantoushang.bmp')
        $moreBox1.css('display', 'block')

    }, function () {
        $li2Img.attr('src', 'imgs/jiantouxia.bmp')
        $moreBox1.css('display', 'none')
    })

    $moreBox1.hover(function () {
        $(this).show();
        $(this).children('ul').children('li').off('mouseenter').mouseenter(function () {
            $(this).css('background', '#e8e7e7').children('a').css('color', 'orange').end().siblings().css('background', '#fff').children('a').css('color', '#333')
        })
    }, function () {
        $li2Img.attr('src', 'imgs/jiantouxia.bmp')
        $moreBox1.css('display', 'none')

    })


    $li3.hover(function () {
        $moreBox2.css('display', 'block')
    }, function () {
        $moreBox2.css('display', 'none')
    })

    $moreBox2.hover(function () {
        $(this).show();
        $(this).children('ul').children('li').off('mouseenter').mouseenter(function () {
            $(this).css('background', '#e8e7e7').children('a').css('color', 'orange').end().siblings().css('background', '#fff').children('a').css('color', '#333')
        })
    }, function () {

        $moreBox2.css('display', 'none')

    })


}

function buycars() {
    var $buyCarBtn = $('#buycars')
    var $buyCarBox = $('#hidebuy')
        //    console.log($buyCarBtn)
    $buyCarBtn.hover(function () {

        $(this).children('img').attr({
            src: 'imgs/gouwuge12.jpg'
        });

        $buyCarBox.show().css('display', 'block').stop().animate({
            width: 260,

        }, 300)
        if ($buyCarBox.empty()) {
            $buyCarBox.append('<p>您还什么都没买，快来吧！<br><a href="#">挑选商品</a></p><img src="imgs/buycarbg.jpg">')
        }

    }, function () {
        $(this).children('img').attr({
            src: 'imgs/gouwuge11.jpg'
        })
        $buyCarBox.stop().animate({
            width: 35
        }, 300).css('display', 'none')
    })
    $buyCarBox.hover(function () {
        $buyCarBox.css('display', 'block').show().stop()
    }, function () {
        $buyCarBox.stop().animate({
            width: 35
        }, 300).css('display', 'none')
    })
}

function bigPic() {
    //获取外层容器
    var box = document.getElementById('imgBox');
    //设置外层容器样式
    box.style.cssText = 'width:380px;height:380px;position:relative;';
    //创建小图容器
    var leftBox = document.createElement('div');
    //设置小容器样式
    leftBox.style.cssText = 'width:380px;height:380px;position:relative;';
    //创建滤镜，蒙板，小图
    var ball = document.createElement('div');
    ball.style.cssText = 'width:95px;height:95px;position:absolute;left:0;top:0;background:#fff;opacity:0.3;filter:alpha(opacity=30);display:none;';
    var mb = document.createElement('div');
    mb.style.cssText = 'width:100%;height:100%;position:absolute;left:0;top:0;z-index:1;';
    var leftImg = document.createElement('img');
    leftImg.src = '../imgs/zoomimg1.jpg';
    leftImg.width = '380';
    leftImg.height = '380';

    //    console.log(leftImg)
    //创建大图容器
    var rightBox = document.createElement('div');
    rightBox.style.cssText = 'width:100%;height:100%;position:absolute;left:390px;top:0;overflow:hidden;display:none;z-index:4';
    //创建大图
    var rightImg = document.createElement('img');
    rightImg.src = 'imgs/zoomimg1.jpg';
    rightImg.width = '1520';
    rightImg.height = '1520';
    rightImg.style.cssText = 'position:absolute;left:0;top:0;'
        //插入元素
    leftBox.appendChild(ball)
    leftBox.appendChild(mb)
    leftBox.appendChild(leftImg)
    rightBox.appendChild(rightImg)
    box.appendChild(leftBox);
    box.appendChild(rightBox)

    //绑定事件
    leftBox.onmousemove = function (event) {
        var e = event || window.event;
        ball.style.display = 'block';
        rightBox.style.display = 'block';
        var mouX = e.offsetX - ball.offsetWidth / 2;
        var mouY = e.offsetY - ball.offsetHeight / 2;

        if (mouX <= 0) {
            mouX = 0
        } else if (mouX >= this.clientWidth - ball.offsetWidth) {
            mouX = this.clientWidth - ball.offsetWidth
        }
        if (mouY <= 0) {
            mouY = 0
        } else if (mouY >= this.clientHeight - ball.offsetHeight) {
            mouY = this.clientHeight - ball.offsetHeight
        }
        ball.style.left = mouX + 'px';
        ball.style.top = mouY + 'px';

        rightImg.style.left = mouX * -4 + 'px';
        rightImg.style.top = mouY * -4 + 'px';

        this.onmouseout = function () {
            ball.style.display = 'none';
            rightBox.style.display = 'none';
        }
    }
    var $btns = $('#btns>li')
        //   console.log($btns)
    $btns.hover(function () {
        var $save = $(this).index()
        $(leftImg).attr({
            src: 'imgs/zoomimg' + ($save + 1) + '.jpg'
        })
        $(rightImg).attr({
            src: 'imgs/zoomimg' + ($save + 1) + '.jpg'
        })
        $(this).css({
            border: '1px solid #f60'
        }).siblings('li').css({
            border: 'none',
        })
    })
}

function contDown() {
    var now = new Date();
    var after = new Date(2016, 8, 6, 0, 0, 0);
    var leftTime = after - now;
    var leftsecond = parseInt(leftTime / 1000);
    var day = Math.floor(leftsecond / (60 * 60 * 24));
    var hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
    var minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60);

    var ctn = document.getElementById('zoomRBox').getElementsByTagName('i')[0];
    ctn.innerHTML = '倒计时：' + day + '天' + hour + '小时' + minute + '分钟' + second + '秒';
    //    console.log(ctn)
}

function setInDown() {
    setInterval(contDown, 1000);
}

function goBuyCar() {
    var $labels = $('label')
    var $ifoBox = $('#goodsIfo')
    var $goBuyCar = $('#add-goods')
    var $goodsName = $('#goods-name').html()
    var $goodsId = $('#goods-id').val()
    var $price = $('#price').html()

    var $imgs = $('#goods-img').attr('src')

    $labels.click(function () {


        $(this).css('border-color', '#f60').siblings('label').css('border-color', '#ccc');
        $ifoBox.data('size', $(this).html());
    }).eq(1).css('border-color', 'red');

    $goBuyCar.click(function () {
        var $href = window.location.href;
        var $size = $ifoBox.data('size');
        var $cooVal = '{"name":"' + $goodsName + '","id":"' + $goodsId + '","href":"' + $href + '","url":"' + $imgs + '","price":"' + $price + '","size":"' + $size + '","number":"' + $('#number').val() + '"}'
        console.log($cooVal)
        $.cookie('goods' + $goodsId + $size, $cooVal, {
            expires: 1
        })
        window.open('buycars.html')
    })
}

function toTop() {
    var $toTop = $('#goTop')
        //    console.log($toTop)
    $(window).scroll(function () {
        //        console.log($toTop)
        if ($(document).scrollTop() >= 600) {
            $toTop.css('display', 'block')
        } else {
            $toTop.css('display', 'none')
        }
        $toTop.off('click').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        })
    })
}

function erweima() {
    var $btn = $('#navCenBox>img')
        //    console.log($btn)
    var $erweimaBox = $('#erweimaBox')
    $btn.click(function () {
        $erweimaBox.css('display', 'block')
    })
    $erweimaBox.hover(function () {
        $(this).show()
    }, function () {
        $(this).css('display', 'none')
    })
}

function lists() {
    var $btns = $('#navCenBox li')
    var $bigBox1 = $('#large')
    var $bigBox2 = $('#large2')
    var $bigBox3 = $('#large3')
    var $bigBox4 = $('#large4')
    var $bigBoxes = $('#largeBox>div')
    var $fixlist = $('#fixBox li')
        //    console.log($btns)
        //     console.log($fixlist)
    $btns.click(function () {
        //        alert(1)    
        var save = $(this).index();
        $bigBoxes.eq(save).css('display', 'block').siblings('div').css('display', 'none');
        $fixlist.eq(save).css({
            backgroundColor: '#F9C',
            color: '#fff'
        }).siblings('li').css({
            backgroundColor: '#CCC',
            color: '#fff'
        });
        $(this).css('border-top', '2px solid #f60').siblings('li').css('border-top', '1px solid #CCC');
    })
}

function centerJson() {
    var $box2 = $('#large2')

    $.ajax({
        type: "get",
        url: "json/goodifo.json",
        dataType: "json",
        success: function (msg) {
            //            console.log(msg)
            var $data = $(msg);
            //            console.log($data)
            $data.each(function (index, items) {
                    console.log($data[index].ID)
                    $box2.append('<div class="box2"><div class="box2L"><img src="' + $data[index].imgs + '"><span>' + $data[index].ID + '</span></div><div><p>' + $data[index].words + '</p><br><i>' + $data[index].dates + '</i></div><div class="box2R">购买颜色:' + $data[index].color + '<br>尺码:' + $data[index].size + '</div></div>')
                })
                //            
        }
    })
}

function fixBox() {
    var $fixBoxs = $('#fixBox');
    var oInfo = $(".info");
    var oTop = $fixBoxs.offset().top;
    var sTop = 0;
    $(window).scroll(function () {
        sTop = $(document).scrollTop();

        if (sTop >= oTop) {
            $fixBoxs.css({
                "position": "fixed",
                "top": "0",
                "left": "87px"
            }).fadeIn();
        } else {
            $fixBoxs.css({
                "position": "absolute",
                "top": "185px",
                "left": "0"
            })
        }
    });
}

function fixBtn() {
    var $fixbtns = $('#fixBox li');
    var $bigBoxes = $('#largeBox>div')
    var $btns = $('#navCenBox li');
    //    console.log($fixbtns)
    $fixbtns.off('click').click(function () {
        var save = $(this).index();
        $bigBoxes.eq(save).css('display', 'block').siblings('div').css('display', 'none');
        $btns.eq(save).css('border-top', '2px solid #f60').siblings('li').css('border-top', '1px solid #CCC');
        $(this).css({
            backgroundColor: '#F9C',
            color: '#fff'
        }).siblings('li').css({
            backgroundColor: '#CCC',
            color: '#fff'
        });
        $('html,body').animate({
            scrollTop: 600
        }, 1000);
    })

}

