function buyCars() {
    var $coo = $.cookie();
    var reg = /^goods\d*$/;
    var conut = 0;
    var $numSum = $('.goods_number').val();
    //添加货物
    $.each($coo, function (key, items) {
        console.log(items)
        if (reg.test(key)) {
            var data = eval("(" + items + ")");
            console.log(data.href)
            $('#goods>p').hide();
            $('#goods').append('<dl><dt><input type="checkbox" name="bingo" class="checkedAll" checked><a href="' + data.href + '" target="_blank"><img src="' + data.url + '" />' + data.name + '</a></dt>\
                                       <dd class="goods_size">' + data.size + '</dd><dd class="goods_number">' + data.number + '</dd>\
                                        <dd class="goods_price">' + data.price + '</dd><dd class="delete"><input type="hidden" value=' + data.id + '>删除</dd></dl>');
            $('#all').html($('#all').html() * 1 + data.price * data.number);

        }


    });
    //删除货物即对应cookie
    $('.delete').click(function () {
            $.cookie('goods' + $(this).children('input').val() + $(this).siblings('.goods_size').html(), '', {
                expires: -1
            });
            $('#all').html($('#all').html() * 1 - $(this).siblings('.goods_number').html() * $(this).siblings('.goods_price').html());
            $(this).parents('dl').remove();
            if ($('#goods>dl').size() == 0) {
                $('#goods>p').show();
            }
        })
        //当check不选择时，价格不计算
    var $isCheck = $('input[name=bingo]');
    $isCheck.change(function () {
        if ($(this).prop('checked') == true) {
            $('#all').html($('#all').html() * 1 + $(this).parent().siblings('.goods_number').html() * $(this).parent().siblings('.goods_price').html());
        } else {
            $('#all').html($('#all').html() * 1 - $(this).parent().siblings('.goods_number').html() * $(this).parent().siblings('.goods_price').html());
        }
    })
   
}

function checkAll() {


}