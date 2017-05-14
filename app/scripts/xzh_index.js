/**
 * Created by Administrator on 2017/5/10 0010.
 */
function two_char(n) {
    return n >= 10 ? n : "0" + n;
}
function time_fun() {
    var sec=0;
    setInterval(function () {
        sec++;
        var date = new Date(0, 0)
        date.setSeconds(sec);
        var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
        document.getElementById("mytime").innerText = two_char(h) + ":" + two_char(m) + ":" + two_char(s);
    }, 1000);
}

//搜索框
function scroll() {
    //判断当前的浏览器是否是IE9+ 或者其他浏览器
    if (window.pageYOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    }
    //检测是否是怪异模式浏览器，就是没有声明<!DOCTYPE html>
    else if(document.compatMode == "CSS1Compat"){
        //正常模式
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        };
    }
    //怪异浏览器
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    };
}
document.onscroll = function () {
    var dis = scroll().top;
    var div = document.getElementById("top1");
  if(dis>100) {
        div.className = "top1 top5";
    }else {
        div.className = "top1";
    }
}