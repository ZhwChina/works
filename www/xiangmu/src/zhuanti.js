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
    $hideBox.hover(function () {
        $(this).show()
    }, function () {
        $(this).css('display', 'none')
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

function imgBox1() {
    var $imgBox = $('#imgsBox1')

    $.ajax({
        type: 'get',
        url: 'json/zhuantigoods1.json',
        success: function (msg) {
            var $data = $(msg);
            $data.each(function (index, items) {
                $imgBox.append('<a href="#"><img src="' + $data[index].url + '"></a>')
                var $btnA = $imgBox.find('img')
               
            })

        }

    })

}