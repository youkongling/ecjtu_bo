/**
 * Created by xiaobo on 2016/7/10.
 */
var timers;
var timer_ul;
window.onload=function(){
    var t=document.getElementById("list").getElementsByTagName("a");
    var k=document.getElementById("list1").getElementsByTagName("li");
    //循环添加事件
    for(var i=0;i<t.length;i++){
        t[i].onmouseover=(function(num){
            return function(){showLi(num)}
        })(i);
        k[i].onmouseover=(function(num){
            return function(){showLi(num);hide1(num)}
        })(i);
    }
    //错误示例
    //var t=document.getElementById("list").getElementsByTagName("a");
    //var k=document.getElementById("list1").getElementsByTagName("li");
    ////循环添加事件
    //for(var i=0;i<t.length;i++){
    //    t[i].onmouseover=(function(num){
    //        showLi(num)
    //    })(i);
    //    k[i].onmouseover=(function(num){
    //        showLi(num);hide1(num);
    //    })(i);
    //}

    //var s=document.getElementById("cd_top").getElementsByTagName("li");
    //for(var j=1;j< s.length;j++){
    //    s[j].onmouseover=(function(num){
    //        return function(){turn_font(num-1)}
    //    });
    //    s[j].onmouseout=(function(num){
    //        return function(){clear_font(num-1)}
    //    });
    //}

    var timerw=window.setInterval(function(){
        out();
        var a=document.getElementById("butt");
        var s=parseInt(a.style.left);
        if(s<200&&lock==false){
            timer=window.setInterval(function(){
                left(200);
            },15);
        }else if(s>0&&lock==true){
            timer=window.setInterval(function(){
                right(0);
            },15);
        }
    },500);

    timers=window.setInterval("img_move()",3000);

    timer_ul=window.setInterval(function(){
        run_ul();
    },500);
};
function showLi(num){
    var t=document.getElementById("list").getElementsByTagName("a");
    var k=document.getElementById("list1").getElementsByTagName("li");
    for(var i=0;i<t.length;i++){
        t[i].className="";
        k[i].style.display="none";
    }
    k[num].style.display="block";
    t[num].className="on";
    k[num].style.left=t[num].offsetLeft+"px"
}
function hide1(num){
    var t=document.getElementById("list").getElementsByTagName("a");
    t[num].className="";
}
function hide(){
    var t=document.getElementById("list").getElementsByTagName("a");
    var k=document.getElementById("list1").getElementsByTagName("li");
    for(var i=0;i<t.length;i++){
        t[i].className="";
        k[i].style.display="none";
    }
}

var timer;
var lock=false;
function left(yuan){
    var t=document.getElementById("butt");
    var s=t.style.left;
    s=parseInt(s)+1;
    if(s>=yuan){
        s=yuan;
        lock=true;
        window.clearInterval(timer);
    }
    t.style.left=s+"px";
}
function right(yuan){
    var t=document.getElementById("butt");
    var s=t.style.left;
    s=parseInt(s)-1;
    if(s<=yuan){
        s=yuan;
        lock=false;
        window.clearInterval(timer);
    }
    t.style.left=s+"px";
}
function out(){
    window.clearInterval(timer);
}

function move(num){
    var t=document.getElementById("ctltr_left").getElementsByTagName("li");
    var s=document.getElementById("ctltrl_img");
    s.style.left=t[num].offsetLeft+"px";
}

var timer_img;
var tou=0;
var img_now=0;
var lock_img=false;
function jixu(){
    timers=window.setInterval("img_move()",3000);
}
function tingzhi(){
    window.clearInterval(timers);
}
function img_move(){
    img_now++;
    var t=document.getElementById("ctld_left").getElementsByTagName("li");
    if(img_now> t.length-1  ){
        img_now=0;
    }
    show_img(img_now);
}
function show_img(num){
    img_now=num;
    var t=document.getElementById("ctld_left").getElementsByTagName("li");
    var s=document.getElementById("ctldl_ctrl").getElementsByTagName("li");
    if(lock_img==false){
        lock_img=true;
        for(var i=0;i< t.length;i++){
            t[i].style.display="none";
            t[i].style.opacity="0";
            s[i].style.backgroundColor="#000";
        }
        t[num].style.display="block";
        s[num].style.backgroundColor="red";
        tou=0;
        timer_img=window.setInterval(function(){
            detail(t[num]);
        },100);
    }
    //for(var i=0;i< t.length;i++){
    //    t[i].style.display="none";
    //    t[i].style.opacity="0";
    //    s[i].style.backgroundColor="#000";
    //}
    //t[num].style.display="block";
    //s[num].style.backgroundColor="red";
    //tou=0;
    //timer_img=window.setInterval(function(){
    //    detail(t[num]);
    //},100);
}
function setOpacity(obj,value){
    var a=navigator.userAgent;
    if((a.indexOf("MSIE 6.0")!=-1)||(a.indexOf("MSIE 7.0")!=-1)||(a.indexOf("MSIE 8.0")!=-1)){
        obj.style.filter="alpha(opacity="+value+")";
    }else{
        obj.style.opacity=value/100;
    }
}
function detail(obj){
    var speed=Math.ceil(Math.abs(tou-100)/4);
    tou=tou+speed;
    if(tou>=100){
        tou=100;
        lock_img=false;
        window.clearInterval(timer_img);
    }
    setOpacity(obj,tou);
}
function show_li(num){
    var s=document.getElementById("ctldl_ctrl").getElementsByTagName("li");
    for(var i=0;i< s.length;i++){
        s[i].style.backgroundColor="#000";
    }
    s[num].style.backgroundColor="red";
    s[img_now].style.backgroundColor="red";
}
function clear_li(){
    var s=document.getElementById("ctldl_ctrl").getElementsByTagName("li");
    for(var i=0;i< s.length;i++){
        s[i].style.backgroundColor="#000";
    }
    s[img_now].style.backgroundColor="red";
}

function show_new(num){
    var s=document.getElementById("ctld_right").getElementsByTagName("li");
    for(var i=0;i< s.length;i++){
        s[i].style.display="none";
    }
    s[num].style.display="block";
}

function turn_font(num){
    var t=document.getElementById("cd_top1").getElementsByTagName("a");
    for(var i=0;i< t.length;i++){
        t[i].style.color="#000";
    }
    t[num].style.color="red";
}
function clear_font(num){
    var t=document.getElementById("cd_top1").getElementsByTagName("a");
    t[num].style.color="#000";
}
function turn_font1(num){
    var t=document.getElementById("cddl_down").getElementsByTagName("a");
    for(var i=0;i< t.length;i++){
        t[i].style.color="#000";
    }
    t[num].style.color="red";
}
function clear1_font(num){
    var t=document.getElementById("cddl_down").getElementsByTagName("a");
    t[num].style.color="#000";
}

function move1(num){
    var t=document.getElementById("cddct_left").getElementsByTagName("li");
    var s=document.getElementById("cddctl_img");
    s.style.left=t[num].offsetLeft+"px";
}
function show_new1(num){
    var s=document.getElementById("cddc_down").getElementsByTagName("li");
    for(var i=0;i< s.length;i++){
        s[i].style.display="none";
    }
    s[num].style.display="block";
}

function turn_bg(){
    var t=document.getElementById("cddr_top1");
    t.style.backgroundColor="lightgreen";
}
function turn_bg1(){
    var t=document.getElementById("cddr_top2");
    t.style.backgroundColor="lightgreen";
}
function clear_bg(){
    var t=document.getElementById("cddr_top1");
    t.style.backgroundColor="lightseagreen";
}
function clear_bg1(){
    var t=document.getElementById("cddr_top2");
    t.style.backgroundColor="deepskyblue";
}

function turn1_img(){
    var t=document.getElementById("cddrd_left");
    t.innerHTML="<img src='image\\shujixx_h.gif'>";
}
function clear1_img(){
    var t=document.getElementById("cddrd_left");
    t.innerHTML="<img src='image\\shujixx.gif'>";
}
function turn2_img(){
    var t=document.getElementById("cddrd_right");
    t.innerHTML="<img src='image\\shujixx_h.gif'>";
}
function clear2_img(){
    var t=document.getElementById("cddrd_right");
    t.innerHTML="<img src='image\\shujixx.gif'>";
}

var lock1_img=false;
function link_img(){
    var t=document.getElementById("cddrli_right");
    var s=document.getElementById("cddr_click");
    if(lock1_img==false){
        t.innerHTML="<span >上</span>";
        s.style.display="block";
        lock1_img=true;
    }else{
        t.innerHTML="<span >下</span>";
        s.style.display="none";
        lock1_img=false;
    }
}
function link_bg(num){
    var s=document.getElementById("cddr_click").getElementsByTagName("li");
    for(var i=0;i< s.length;i++){
        s[i].className="";
    }
    s[num].className="on";
}
function link_clear(num){
    var s=document.getElementById("cddr_click").getElementsByTagName("li");
    s[num].className="";
}

function run_ul(){
    out_ul();
    timer_ul=window.setInterval(function(){
        move_dul1();
        move_dul2();
    },30);
}
function move_dul1(){
    var t=document.getElementById("dd_ul1");
    var left=t.style.left;
    left=parseInt(left)-1;
    if(left<=-990){
        left=990;
        window.clearInterval(timer_ul);
        run_ul();
    }
    t.style.left=left+"px";
}
function move_dul2(){
    var t=document.getElementById("dd_ul2");
    var left1=t.style.left;
    left1=parseInt(left1)-1;
    if(left1<=-990){
        left1=990;
        window.clearInterval(timer_ul);
        run_ul();
    }
    t.style.left=left1+"px";
}
function out_ul(){
    window.clearInterval(timer_ul);
}
function turn_foul(num){
    var t=document.getElementById("dd_ul1").getElementsByTagName("span");
    for(var i=0;i< t.length;i++){
        t[i].style.color="#000";
    }
    t[num].style.color="red";
}
function clear_foul(num){
    var t=document.getElementById("dd_ul1").getElementsByTagName("span");
    t[num].style.color="#000";
}
function turn_foul1(num){
    var t=document.getElementById("dd_ul2").getElementsByTagName("span");
    for(var i=0;i< t.length;i++){
        t[i].style.color="#000";
    }
    t[num].style.color="red";
}
function clear_foul1(num){
    var t=document.getElementById("dd_ul2").getElementsByTagName("span");
    t[num].style.color="#000";
}