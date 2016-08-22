//var list = [{
//            imgUrl: 'img/1.jpg',
//            href: '#'
//            }, {
//            imgUrl: 'img/2.jpg',
//            href: '#'
//            }, {
//            imgUrl: 'img/3.jpg',
//            href: '#'
//            }, {
//            imgUrl: 'img/4.jpg',
//            href: '#'
//            }, {
//            imgUrl: 'img/5.jpg',
//            href: '#'
//            }, {
//            imgUrl: 'img/6.jpg',
//            href: '#'
//            }]
//        
//        $('#box').scroll({
//            url: list,
//            boxWid:1000,
//            boxHei:400
//        }).css({
//            margin:'0 auto'
//        })


(function ($) {
    $.fn.extend({
        fade: function (opt) {
            //设置默认值
            var settings = {
                    url: null,
                    boxWid: 1000,
                    boxHei: 500,
                    times: 2000
                }
                //合并参数
            var o = $.extend(settings, opt);
            //缓存容器对象
            var $box = this;
            var $oUl = $('<ul></ul>');
            var $prev = $('<h3>&lt;</h3>');
            var $next = $('<h3>&gt;</h3>')
                //创建图片元素
            $.each(o.url, function (index, items) {
                $box.append('<div><a href=' + items.href + '><img src=' + items.imgUrl + ' /></a></div>');
                $oUl.append('<li></li>');
            })
            $box.append($oUl, $prev, $next);
            /*****设置样式*****/
            //容器及图片样式
            $box.css({
                    width: o.boxWid,
                    height: o.boxHei,
                    position: 'relative'
                }).children('div').css({
                    width: o.boxWid,
                    height: o.boxHei,
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    display: 'none'
                }).eq(0).show().end().find('a,img').css({
                    display: 'block',
                    width: '100%',
                    height: '100%'
                })
                //焦点及左右按钮样式
            $oUl.css({
                position: 'absolute',
                bottom: o.boxHei / 20,
                right: o.boxWid / 20,
                overflow: 'hidden',
                zIndex: 5,
                listStyle: 'none'
            }).children('li').css({
                float: 'left',
                width: 15,
                height: 15,
                borderRadius: '50%',
                background: '#fff',
                opacity: 0.3,
                marginRight: 5
            }).eq(0).css('opacity', 0.9);
            $box.children('h3').css({
                    position: 'absolute',
                    top: (o.boxHei - 70) / 2,
                    padding: '20px 10px',
                    fontSize: 30,
                    fontFamily: '黑体',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.5)',
                    cursor: 'pointer'
                }).hide().eq(1).css('right', '0')
                //自动轮播
            var $timer = setTimeout(move, o.times);
            var $flag = true;
            var $index = 0;

            function move() {
                $index++;
                if ($index == o.url.length) {
                    $index = 0;
                }
                //图片切换
                $box.children('div').eq($index).stop().fadeIn(300, function () {
                    if ($flag) {
                        clearTimeout($timer);
                        $timer = setTimeout(move, o.times);
                    }
                }).siblings('div').stop().fadeOut(300);
                //焦点切换
                $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
            }
            //焦点切换
            $oUl.children('li').click(function () {
                    $index = $(this).index();
                    $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                    $(this).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                })
                //左右点击切换
            $box.hover(function () {
                    $flag = false;
                    clearTimeout($timer);
                    $(this).children('h3').stop().fadeIn(300);
                    $prev.off('click').click(function () {
                        $index--;
                        if ($index == -1) {
                            $index = o.url.length - 1;
                        }
                        $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                        $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                    }).next('h3').off('click').click(function () {
                        $index++;
                        if ($index == o.url.length) {
                            $index = 0;
                        }
                        $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                        $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                    })
                }, function () {
                    $flag = true;
                    $timer = setTimeout(move, o.times);
                    $(this).children('h3').stop().fadeOut(300)
                })
                //阻止文本被选中
            $box.children('h3').each(function (index, items) {
                    items.onselectstart = items.onmousedown = items.onmouseup = function () {
                        return false;
                    }
                })
                //返回容器对象
            return this;
        },
        scroll: function (opt) {
            //设置默认参数
            var settings = {
                    url: null,
                    boxWid: 1000,
                    boxHei: 400,
                    times: 2000,
                    bgColor: '#fff'
                }
                //合并参数
            var o = $.extend(settings, opt);
            //缓存，创建对象
            var $box = this;
            var $imgBox = $('<ul></ul>');
            var $oUl = $('<ul></ul>');
            var $prev = $('<h3>&lt;</h3>');
            var $next = $('<h3>&gt;</h3>');
            $.each(o.url, function (index, items) {
                $imgBox.append('<li><a href=' + items.href + '><img src=' + items.imgUrl + '></a></li>');
                $oUl.append('<li></li>');
            })
            $box.append($imgBox, $oUl, $prev, $next);
            var $first = $imgBox.children('li').eq(0).clone(true);
            $imgBox.append($first)
                /*****设置样式******/
                //外层容器样式
            $box.css({
                    width: o.boxWid,
                    height: o.boxHei,
                    position: 'absolute',
                    overflow: 'hidden',
                })
                //图片，容器样式
            $imgBox.css({
                    width: o.boxWid * (o.url.length + 1),
                    overflow: 'hidden',
                    position: 'absolute',
                    left: 0,
                    top: 0
                }).children('li').css({
                    width: o.boxWid,
                    height: o.boxHei,
                    float: 'left'
                }).find('a,img').css({
                    width: '100%',
                    height: '100%',
                    display: 'block'
                })
                //焦点样式
            $oUl.css({
                    position: 'absolute',
                    right: o.boxWid / 20,
                    bottom: o.boxHei / 20,
                    overflow: 'hidden'
                }).children('li').css({
                    cursor:'pointer',
                    width: 15,
                    height: 15,
                    borderRadius: '50%',
                    float: 'left',
                    marginRight: 5,
                    background: o.bgColor,
                    opacity: 0.3
                }).eq(0).css('opacity', 0.9)
                //左右按钮样式
            $box.children('h3').css({
                    position: 'absolute',
                    top: (o.boxHei - 70) / 2,
                    padding: '20px 10px',
                    fontSize: 30,
                    fontFamily: '黑体',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.5)',
                    cursor: 'pointer'
                }).hide().eq(1).css('right', '0')
                //自动轮播
            var $timer = setTimeout(move, o.times);
            var $flag = true;
            var $l = 0;

            function move() {
                $l -= o.boxWid;
                if ($l == -$imgBox.innerWidth()) {
                    $l = -o.boxWid;
                    $imgBox.css('left', 0)
                }
                //图片轮播
                $imgBox.stop().animate({
                        left: $l
                    }, 300, function () {
                        if ($flag) {
                            clearTimeout($timer);
                            $timer = setTimeout(move, o.times);
                        }
                    })
                    //焦点切换
                $oUl.children('li').eq((-$l / o.boxWid) % o.url.length).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
            }
            //焦点切换
            $oUl.children('li').click(function () {
                    $l = -$(this).index() * o.boxWid;
                    //图片轮播
                    $imgBox.stop().animate({
                            left: $l
                        }, 300)
                        //焦点切换
                    $(this).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                })
                //左右切换
            $box.hover(function () {
                    $flag = false;
                    clearTimeout($timer);
                    $(this).children('h3').stop().fadeIn(300);
                }, function () {
                    $flag = true;
                    $timer = setTimeout(move, o.times);
                    $(this).children('h3').stop().fadeOut(300)
                })
                //前一张
            $prev.click(function () {
                    $l += o.boxWid;
                    if ($l == o.boxWid) {
                        $l = -o.boxWid * (o.url.length - 1);
                        $imgBox.css('left', -o.boxWid * o.url.length);
                    }
                    //图片轮播
                    $imgBox.stop().animate({
                            left: $l
                        }, 300)
                        //焦点切换
                    $oUl.children('li').eq((-$l / o.boxWid) % o.url.length).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);

                })
                //后一张
            $next.click(function () {
                    $l -= o.boxWid;
                    if ($l == -$imgBox.innerWidth()) {
                        $l = -o.boxWid;
                        $imgBox.css('left', 0);
                    }
                    //图片轮播
                    $imgBox.stop().animate({
                            left: $l
                        }, 300)
                        //焦点切换
                    $oUl.children('li').eq((-$l / o.boxWid) % o.url.length).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);

                })
                //阻止文本被选中
            $box.children('h3').each(function (index, items) {
                    items.onselectstart = items.onmousedown = items.onmouseup = function () {
                        return false;
                    }
                })
                //返回DOM对象
            return this;
        }
    })
}(jQuery))