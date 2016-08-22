/*bigPic({
    id: 'box',    容器id
    boxWid: 200,   容器宽度
    boxHei: 300,   容器高度
    scale: 4,      倍率
    col: '#3388ff',   滤镜颜色
    imgSrc: 'img/2.jpeg'   图片路径
})*/


function bigPic(opt) {
    //获取外层容器
    var box = document.getElementById(opt.id);
    //设置外层容器样式
    box.style.cssText = 'width:' + opt.boxWid + 'px;height:' + opt.boxHei + 'px;position:relative;';
    //创建小图容器
    var leftBox = document.createElement('div');
    //设置小容器样式
    leftBox.style.cssText = 'width:100%;height:100%;position:relative;';
    //创建滤镜，蒙板，小图
    var ball = document.createElement('div');
    ball.style.cssText = 'width:' + (opt.boxWid / opt.scale) + 'px;height:' + (opt.boxHei / opt.scale) + 'px;position:absolute;left:0;top:0;background:' + opt.col + ';opacity:0.3;filter:alpha(opacity=30);display:none;';
    var mb = document.createElement('div');
    mb.style.cssText = 'width:100%;height:100%;position:absolute;left:0;top:0;z-index:1;';
    var leftImg = document.createElement('img');
    leftImg.src = opt.imgSrc;
    leftImg.width = opt.boxWid;
    leftImg.height = opt.boxHei;
    //创建大图容器
    var rightBox = document.createElement('div');
    rightBox.style.cssText = 'width:100%;height:100%;position:absolute;left:' + (opt.boxWid + 10) + 'px;top:0;overflow:hidden;display:none;';
    //创建大图
    var rightImg = document.createElement('img');
    rightImg.src = opt.imgSrc;
    rightImg.width = opt.boxWid * opt.scale;
    rightImg.height = opt.boxHei * opt.scale;
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

        rightImg.style.left = mouX * -opt.scale + 'px';
        rightImg.style.top = mouY * -opt.scale + 'px';

        this.onmouseout = function () {
            ball.style.display = 'none';
            rightBox.style.display = 'none';
        }
    }
}