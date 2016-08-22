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
    $hideBox.hover(function(){
        $(this).show()
    },function(){
        $(this).css('display','none')
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

function bannerL() {
    var $banLBox = $('#banLBox');

    $.ajax({
        type: 'get',
        url: 'json/bannerL.json',
        success: function (msg) {
            var $data = $(msg);
            //            console.log($(msg))
            $data.each(function (index, items) {
                for (var key in items) {
                    $banLBox.append('<div><img src=' + items[key].src + '><a href="#"><span>' + items[key].title + '</span></a><ul><li><a href = "goodslist.html"> ' + items[key].urls[0].name + ' </a></li><li><a href="#"> ' + items[key].urls[1].name + '</a></li><li><a href="#">' + items[key].urls[2].name + '</a></li><li><a href="#">' + items[key].urls[3].name + '</a></li></ul></div>');
                    //                    console.log(items[key].url[4].name)
                }

            })
            rightbox();
            boxMove();
        }
    })
}

function rightbox() {
    var $rightBox = $('#banHideBox');
    var $leftBox = $('#banLBox');
    var $divs = $leftBox.children('div');

    $.ajax({
        type: 'get',
        url: 'json/bannerL2.json',

        success: function (msg) {
            var $data = $(msg);

            $data.each(function (index, items) {
                for (var key in items) {
                    $divs.eq(index).hover(function () {
                        if (index > 4) {
                            $rightBox.css('top', '144px')
                        } else {
                            $rightBox.css('top', 0)
                        }
                        $rightBox.html(null);
                        //                                                console.log(items[key].title[0].spans)
                        //                        console.log(items[key].urls6[3].types)
                        //                        console.log(items[key].src)
                        $rightBox.css('display', 'block')

                        $rightBox.append('<span>' + items[key].title[0].spans + '</span><ul><li><a href="#">' + items[key].urls1[0].types + '</a></li><li><a href="#">' + items[key].urls1[1].types + '</a></li><li><a href="#">' + items[key].urls1[2].types + '</a></li><li><a href="#">' + items[key].urls1[3].types + '</a></li><li><a href="#">' + items[key].urls1[4].types + '</a></li></ul><span>' + items[key].title[1].spans + '</span><ul><li><a href="#">' + items[key].urls2[0].types + '</a></li><li><a href="#">' + items[key].urls2[1].types + '</a></li><li><a href="#">' + items[key].urls2[2].types + '</a></li><li><a href="#">' + items[key].urls2[3].types + '</a></li><li><a href="#">' + items[key].urls2[4].types + '</a></li><li><a href="#">' + items[key].urls2[5].types + '</a></li></ul><span>' + items[key].title[2].spans + '</span><ul><li><a href="#">' + items[key].urls3[0].types + '</a></li><li><a href="#">' + items[key].urls3[1].types + '</a></li><li><a href="#">' + items[key].urls3[2].types + '</a></li><li><a href="#">' + items[key].urls3[3].types + '</a></li><li><a href="#">' + items[key].urls3[4].types + '</a></li><li><a href="#">' + items[key].urls3[5].types + '</a></li></ul><span>' + items[key].title[3].spans + '</span><ul><li><a href="#">' + items[key].urls4[0].types + '</a></li><li><a href="#">' + items[key].urls4[1].types + '</a></li><li><a href="#">' + items[key].urls4[2].types + '</a></li><li><a href="#">' + items[key].urls4[3].types + '</a></li><li><a href="#">' + items[key].urls4[4].types + '</a></li><li><a href="#">' + items[key].urls4[5].types + '</a></li></ul><span>' + items[key].title[4].spans + '</span><ul><li><a href="#">' + items[key].urls5[0].types + '</a></li><li><a href="#">' + items[key].urls5[1].types + '</a></li><li><a href="#">' + items[key].urls5[2].types + '</a></li><li><a href="#">' + items[key].urls5[3].types + '</a></li><li><a href="#">' + items[key].urls5[4].types + '</a></li><li><a href="#">' + items[key].urls5[5].types + '</a></li></ul><span>' + items[key].title[5].spans + '</span><ul><li><a href="#">' + items[key].urls6[0].types + '</a></li><li><a href="#">' + items[key].urls6[1].types + '</a></li><li><a href="#">' + items[key].urls6[2].types + '</a></li><li><a href="#">' + items[key].urls6[4].types + '</a></li></ul><a href="#"><img src=' + items[key].src + '></a>')



                    }, function () {
                        $rightBox.css('display', 'none')

                    })
                    $rightBox.hover(function () {
                        $(this).show();

                    }, function () {
                        $rightBox.css('display', 'none')
                        $rightBox.html(null);
                    })

                }

            })
        }
    })
}

function bannerGo() {
    var list = [{
        imgUrl: 'imgs/bannerGO1.jpg',
        href: '#'
            }, {
        imgUrl: 'imgs/bannerGO2.jpg',
        href: '#'
            }, {
        imgUrl: 'imgs/bannerGO3.jpg',
        href: '#'
            }, {
        imgUrl: 'imgs/bannerGO4.jpg',
        href: '#'
            }, {
        imgUrl: 'imgs/bannerGO5.jpg',
        href: '#'
            }]

    $('#bannerGo').scroll({
        url: list,
        boxWid: 770,
        boxHei: 380
    }).css({
        margin: '0 auto'
    })
}

function grayBox() {
    var $banRBox = $('#banRBox');
    var $grayBox = $('#grayBox');
    var $grayImgs = $grayBox.find('img');
    var $data = $([{
        'src': 'imgs/huiyuanzhuanxiang2.jpg'
    }, {
        'src': 'imgs/lingquan2.jpg'
    }, {
        'src': 'imgs/quchoujiang2.jpg'
    }])
    var $data1 = $([{
            'src': 'imgs/huiyuanzhuanxiang1.jpg'
        }, {
            'src': 'imgs/lingquan1.jpg'
        }, {
            'src': 'imgs/quchoujiang1.jpg'
        }])
        //        console.log($data[0].src)

    $grayImgs.each(function (index, items) {
        var self = index
            //        console.log(self)
        $grayImgs.eq(index).hover(function () {
            $(this).attr('src', $data[self].src)

        }, function () {
            $(this).attr('src', $data1[self].src)
        })
    })

}

function banRloop() {
    var list = [{
        imgUrl: 'imgs/banRloop1.jpg',
        href: '#'
            }, {
        imgUrl: 'imgs/banRloop2.jpg',
        href: '#'
            }, {
        imgUrl: 'imgs/banRloop3.jpg',
        href: '#'
            }]

    $('#rightImgLoop').scroll({
        url: list,
        boxWid: 200,
        boxHei: 220
    }).css({
        margin: '0 auto'
    })
}

function upDown() {
    var $box = $('#imgsbox');
    var $lis = $box.children('li');
    var $btns = $('#topList li')
    var $box2 = $('#imgsbox2');
    var $lis2 = $box2.children('li');
    $btns.each(function (index, items) {
        //        console.log(index)
        $btns.eq(index).hover(function () {
            $(this).css({
                borderBottom: '2px solid #f60'
            })
            if (index == 1) {
                $box.css('display', 'none')
                $box2.css('display', 'block')
            } else {
                $box.css('display', 'block')
                $box2.css('display', 'none')
            }
        }, function () {
            $(this).css({
                borderBottom: '0'
            })
            if (index == 1) {
                $box.css('display', 'none')
                $box2.css('display', 'block')
            } else {
                $box.css('display', 'block')
                $box2.css('display', 'none')
            }
        })
    })

    $lis.each(function (index, items) {
        $(items).css({
            background: 'url(imgs/updown' + (index + 1) + '.jpg) center center no-repeat'
        })
        $lis.hover(function () {

            $(this).stop().animate({
                height: 110
            }, 200).children('div').hide().end().siblings('li').stop().animate({
                height: 67
            }, 200).children('div').show();
        }, function () {
            $lis.stop().animate({
                height: 67
            }, 200)
        })
    })
    $lis2.each(function (index, items) {
        $(items).css({
            background: 'url(imgs/updown' + (index + 5) + '.jpg) center center no-repeat'
        })
        $lis2.hover(function () {

            $(this).stop().animate({
                height: 110
            }, 200).children('div').hide().end().siblings('li').stop().animate({
                height: 67
            }, 200).children('div').show();
        }, function () {
            $lis2.stop().animate({
                height: 67
            }, 200)
        })
    })


}

function quanjiantou() {
    var $jiantou = $('#toptext>span');
    var $jiantouImg = $jiantou.children('img')
        //    console.log($jiantou)
        //    console.log($jiantouImg)
    $jiantou.hover(function () {
        $jiantouImg.attr('src', 'imgs/tuanjiantou2.jpg');
        $jiantou.css('color', '#f60');
    }, function () {
        $jiantouImg.attr('src', 'imgs/tuanjiantou.jpg');
        $jiantou.css('color', '#666');
    })
}

function liBlue() {
    var $lisbBlue = $('#toptext>ul>li')
    var $timedownBox = $('#goodsTime')
    console.log($lisbBlue)
    $lisbBlue.each(function (index, items) {
        $lisbBlue.eq(index).hover(function () {
            $(this).css({
                borderBottom: '2px solid #14BBDE'
            })
        }, function () {
            $(this).css({
                borderBottom: 0
            })
        })
    })
}

function timedown() {
    var $btns = $('#toptext>span')
    var $timedownBox = $('#goodsTime')

    //    console.log($timedownBox)

    $.ajax({
        type: 'get',
        url: 'json/timegoods1.json',
        success: function (msg) {
            var $data = msg;
            var arr = [];
            for (var i = 0; i < 6; i++) {
                arr.push(Math.floor(Math.random() * $data.length))
            }
            $.each(arr, function (index, items) {
                $timedownBox.append('<div><a href="#"><img src=' + $data[items].images + '></a><del>&yen;' + $data[items].delpri + '</del><em>&yen;' + $data[items].nowpri + '</em></div>');
            })
            $btns.click(function () {
                $timedownBox.empty()
                var arr = [];
                for (var i = 0; i < 6; i++) {
                    arr.push(Math.floor(Math.random() * $data.length))
                }
                $.each(arr, function (index, items) {
                    $timedownBox.append('<div><a href="#"><img src=' + $data[items].images + '></a><del>&yen;' + $data[items].delpri + '</del><em>&yen;' + $data[items].nowpri + '</em></div>');
                })
            })


        }
    })
}

function inout() {
    var $leftbox1 = $('#leftbox1')
    var $F1in = $('#F1in')
    var $F1out = $('#F1out')
    var $F2in = $('#F2in')
    var $F2out = $('#F2out')
    var $F3in = $('#F3in')
    var $F3out = $('#F3out')
    var $F4in = $('#F4in')
    var $F4out = $('#F4out')
    var $F5in = $('#F5in')
    var $F5out = $('#F5out')


    $F1in.hover(function () {
        $F1out.stop().animate({
            height: 10
        }, 200)
    }, function () {
        $F1out.stop().animate({
            height: 95
        }, 200)
    })
    $F2in.hover(function () {
        $F2out.stop().animate({
            height: 10
        }, 200)
    }, function () {
        $F2out.stop().animate({
            height: 95
        }, 200)
    })
    $F3in.hover(function () {
        $F3out.stop().animate({
            height: 10
        }, 200)
    }, function () {
        $F3out.stop().animate({
            height: 95
        }, 200)
    })
    $F4in.hover(function () {
        $F4out.stop().animate({
            height: 10
        }, 200)
    }, function () {
        $F4out.stop().animate({
            height: 95
        }, 200)
    })
    $F5in.hover(function () {
        $F5out.stop().animate({
            height: 10
        }, 200)
    }, function () {
        $F5out.stop().animate({
            height: 95
        }, 200)
    })
}

function goods11() {
    var $btns = $('#otherUL11>li');
    var $bigBox1 = $('#goodschange1')
    var $bigBox2 = $('#goodschange2')
    $btns.hover(function () {
        $bigBox1.css('display', 'block')
        $bigBox2.css('display', 'none')
        $(this).css('color', '#f60')
    }, function () {
        $(this).css('color', '#333')
    })
}

function goods12() {
    var $btns = $('#otherUL12>li');
    var $bigBox1 = $('#goodschange1')
    var $bigBox2 = $('#goodschange2')
        //    console.log($btns)
    $.ajax({
        type: 'get',
        url: 'json/goods1.json',
        success: function (msg) {
            //            console.log(msg)
            var $data = $(msg);
            $data.each(function (index, items) {
                //                console.log(index)
                for (var key in items) {
                    //                    console.log(items.imgs[0].src)
                    //                    console.log(items.names[0].types)
                    $btns.eq(index).hover(function () {
                        $(this).css({
                            color: '#f60'
                        })
                        $bigBox2.empty();
                        $bigBox2.show();
                        $bigBox2.css('display', 'block')
                        $bigBox1.css('display', 'none')
                        $bigBox2.append('<div><a href="#"><img src=' + items.imgs[0].src + '><span>' + items.names[0].types + '</span><br><i>&yen;' + items.prices[0].pri + '</i></div><div><a href="#"><img src=' + items.imgs[1].src + '><span>' + items.names[1].types + '</span><br><i>&yen;' + items.prices[1].pri + '</i></div><div><a href="#"><img src=' + items.imgs[2].src + '><span>' + items.names[2].types + '</span><br><i>&yen;' + items.prices[2].pri + '</i></div><div><a href="#"><img src=' + items.imgs[3].src + '><span>' + items.names[3].types + '</span><br><i>&yen;' + items.prices[3].pri + '</i></div><div><a href="#"><img src=' + items.imgs[4].src + '><span>' + items.names[4].types + '</span><br><i>&yen;' + items.prices[4].pri + '</i></div><div><a href="#"><img src=' + items.imgs[5].src + '><span>' + items.names[5].types + '</span><br><i>&yen;' + items.prices[5].pri + '</i></div><div><a href="#"><img src=' + items.imgs[6].src + '><span>' + items.names[6].types + '</span><br><i>&yen;' + items.prices[6].pri + '</i></div><div><a href="#"><img src=' + items.imgs[7].src + '><span>' + items.names[7].types + '</span><br><i>&yen;' + items.prices[7].pri + '</i></div><div><a href="#"><img src=' + items.imgs[8].src + '><span>' + items.names[8].types + '</span><br><i>&yen;' + items.prices[8].pri + '</i></div><div><a href="#"><img src=' + items.imgs[9].src + '><span>' + items.names[9].types + '</span><br><i>&yen;' + items.prices[9].pri + '</i></div>')
                    }, function () {
                        $(this).css({
                            color: '#333'
                        })
                    })
                    $bigBox2.hover(function () {
                        $bigBox2.css('display', 'block')
                        $bigBox1.css('display', 'none')

                    }, function () {})
                }
            })
            goods11();
           
        }
    })

}

function goods21() {
    var $btns = $('#otherUL21>li');
    var $bigBox21 = $('#goodschange21')
    var $bigBox22 = $('#goodschange22')
    $btns.hover(function () {
        $bigBox21.css('display', 'block')
        $bigBox22.css('display', 'none')
        $(this).css('color', '#f60')
    }, function () {
        $(this).css('color', '#333')
    })
}

function goods22() {
    var $btns = $('#otherUL22>li');
    var $bigBox21 = $('#goodschange21')
    var $bigBox22 = $('#goodschange22')
        //    console.log($btns)
    $.ajax({
        type: 'get',
        url: 'json/goods21.json',
        success: function (msg) {
            //            console.log(msg)
            var $data = $(msg);
            $data.each(function (index, items) {
                //                console.log(index)
                for (var key in items) {
                    //                    console.log(items.imgs[0].src)
                    //                    console.log(items.names[0].types)
                    $btns.eq(index).hover(function () {
                        $(this).css({
                            color: '#f60'
                        })
                        $bigBox22.empty();
                        $bigBox22.show();
                        $bigBox22.css('display', 'block')
                        $bigBox21.css('display', 'none')
                        $bigBox22.append('<div><a href="#"><img src=' + items.imgs[0].src + '><span>' + items.names[0].types + '</span><br><i>&yen;' + items.prices[0].pri + '</i></div><div><a href="#"><img src=' + items.imgs[1].src + '><span>' + items.names[1].types + '</span><br><i>&yen;' + items.prices[1].pri + '</i></div><div><a href="#"><img src=' + items.imgs[2].src + '><span>' + items.names[2].types + '</span><br><i>&yen;' + items.prices[2].pri + '</i></div><div><a href="#"><img src=' + items.imgs[3].src + '><span>' + items.names[3].types + '</span><br><i>&yen;' + items.prices[3].pri + '</i></div><div><a href="#"><img src=' + items.imgs[4].src + '><span>' + items.names[4].types + '</span><br><i>&yen;' + items.prices[4].pri + '</i></div><div><a href="#"><img src=' + items.imgs[5].src + '><span>' + items.names[5].types + '</span><br><i>&yen;' + items.prices[5].pri + '</i></div><div><a href="#"><img src=' + items.imgs[6].src + '><span>' + items.names[6].types + '</span><br><i>&yen;' + items.prices[6].pri + '</i></div><div><a href="#"><img src=' + items.imgs[7].src + '><span>' + items.names[7].types + '</span><br><i>&yen;' + items.prices[7].pri + '</i></div><div><a href="#"><img src=' + items.imgs[8].src + '><span>' + items.names[8].types + '</span><br><i>&yen;' + items.prices[8].pri + '</i></div><div><a href="#"><img src=' + items.imgs[9].src + '><span>' + items.names[9].types + '</span><br><i>&yen;' + items.prices[9].pri + '</i></div>')
                    }, function () {
                        $(this).css({
                            color: '#333'
                        })
                    })
                    $bigBox22.hover(function () {
                        $bigBox22.css('display', 'block')
                        $bigBox21.css('display', 'none')

                    }, function () {})
                }
            })
            goods21();
           
        }
    })

}

function goods51() {
    var $btns = $('#otherUL51>li');
    var $bigBox51 = $('#goodschange51')
    var $bigBox52 = $('#goodschange52')
    $btns.hover(function () {
        $bigBox51.css('display', 'block')
        $bigBox52.css('display', 'none')
        $(this).css('color', '#f60')
    }, function () {
        $(this).css('color', '#333')
    })
}

function goods52() {
    var $btns = $('#otherUL52>li');
    var $bigBox51 = $('#goodschange51')
    var $bigBox52 = $('#goodschange52')
        //    console.log($btns)
    $.ajax({
        type: 'get',
        url: 'json/goods51.json',
        success: function (msg) {
            //            console.log(msg)
            var $data = $(msg);
            $data.each(function (index, items) {
                //                console.log(index)
                for (var key in items) {
                    //                    console.log(items.imgs[0].src)
                    //                    console.log(items.names[0].types)
                    $btns.eq(index).hover(function () {
                        $(this).css({
                            color: '#f60'
                        })
                        $bigBox52.empty();
                        $bigBox52.show();
                        $bigBox52.css('display', 'block')
                        $bigBox51.css('display', 'none')
                        $bigBox52.append('<div><a href="#"><img src=' + items.imgs[0].src + '><span>' + items.names[0].types + '</span><br><i>&yen;' + items.prices[0].pri + '</i></div><div><a href="#"><img src=' + items.imgs[1].src + '><span>' + items.names[1].types + '</span><br><i>&yen;' + items.prices[1].pri + '</i></div><div><a href="#"><img src=' + items.imgs[2].src + '><span>' + items.names[2].types + '</span><br><i>&yen;' + items.prices[2].pri + '</i></div><div><a href="#"><img src=' + items.imgs[3].src + '><span>' + items.names[3].types + '</span><br><i>&yen;' + items.prices[3].pri + '</i></div><div><a href="#"><img src=' + items.imgs[4].src + '><span>' + items.names[4].types + '</span><br><i>&yen;' + items.prices[4].pri + '</i></div><div><a href="#"><img src=' + items.imgs[5].src + '><span>' + items.names[5].types + '</span><br><i>&yen;' + items.prices[5].pri + '</i></div><div><a href="#"><img src=' + items.imgs[6].src + '><span>' + items.names[6].types + '</span><br><i>&yen;' + items.prices[6].pri + '</i></div><div><a href="#"><img src=' + items.imgs[7].src + '><span>' + items.names[7].types + '</span><br><i>&yen;' + items.prices[7].pri + '</i></div><div><a href="#"><img src=' + items.imgs[8].src + '><span>' + items.names[8].types + '</span><br><i>&yen;' + items.prices[8].pri + '</i></div><div><a href="#"><img src=' + items.imgs[9].src + '><span>' + items.names[9].types + '</span><br><i>&yen;' + items.prices[9].pri + '</i></div>')
                    }, function () {
                        $(this).css({
                            color: '#333'
                        })
                    })
                    $bigBox52.hover(function () {
                        $bigBox52.css('display', 'block')
                        $bigBox51.css('display', 'none')

                    }, function () {})
                }
            })
            goods51();
          
        }
    })

}

function imgsloop() {
    var $oli = $('#imgsloopbg li')
    var $imgBox = $('#imgsloop')
        //    console.log($oli)
        //    console.log($imgBox)
    var $l = 0;
    $oli.hover(function () {
        //        console.log($(this).index())
        $l = -$(this).index() * 400;
        $imgBox.stop().animate({
            left: $l
        }, 300)

    })

}

function circles() {
    var $imgBoxs = $('#circleBox div')
    var $imgs = $imgBoxs.children('img')
        //    console.log($imgs)
    $imgs.hover(function () {
        $(this).stop().animate({
            width: 85,
            height: 85
        }, 300).parent('div').find('span').css('color', '#f60')
    }, function () {
        $(this).stop().animate({
            width: 105,
            height: 105
        }, 300).parent('div').find('span').css('color', '#666')
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



function boxMove(){
   var $bannerL=$('#banLBox>div')
   var $goodsBoxcenters=$('#goodsBoxcenter1').find('div')
   var $goodsBoxLeft=$('#goodsBoxLeft').find('div')
   var $goodschange1box=$('#goodschange1').find('div')
   var $goodschange2box=$('#goodschange21').find('div')
   var $goodschange5box=$('#goodschange51').find('div')
//   console.log($goodschange2box)
   $bannerL.hover(function(){    
       $(this).stop().animate({
           paddingLeft:30
          
       },300)
   },function(){
        $(this).stop().animate({
           paddingLeft:10
         
       },300)
   })
   
   $goodsBoxcenters.hover(function(){    
       $(this).stop().animate({
           paddingTop:20
       },300)
   },function(){
        $(this).stop().animate({
           paddingTop:0
       },300)
   })
   $goodsBoxLeft.hover(function(){    
       $(this).stop().animate({
           scrollLeft:20
       },300)
   },function(){
        $(this).stop().animate({
           scrollLeft:0
       },300)
   })
  $goodschange1box.hover(function(){  
       $(this).stop().animate({
           scrollLeft:20          
       },300)
   },function(){
        $(this).stop().animate({
           scrollLeft:0            
       },300)
   })
  $goodschange2box.hover(function(){  
       $(this).stop().animate({
           scrollLeft:20          
       },300)
   },function(){
        $(this).stop().animate({
           scrollLeft:0           
       },300)
   })
  $goodschange5box.hover(function(){  
       $(this).stop().animate({
          scrollLeft:20         
       },300)
   },function(){
        $(this).stop().animate({
           scrollLeft:0           
       },300)
   })
    
}
