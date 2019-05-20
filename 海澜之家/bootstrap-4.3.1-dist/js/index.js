document.getElementById("J_qrcode").onmouseover=function(){
    document.getElementById("J_qrcode").className="item active";
}
document.getElementById("J_qrcode").onmouseout=function(){
    console.log(J_qrcode)
    document.getElementById("J_qrcode").className="item unactive";
}



var qrcode=document.getElementById("J_qrcode");
qrcode.onmouseover=movein;
qrcode.onmouseout=moveout;

var phone=document.getElementById("J_phone");
phone.onmouseover=movein;
phone.onmouseout=moveout;

var pad=document.getElementById("J_pad");
pad.onmouseover=movein;
pad.onmouseout=moveout;

var other=document.getElementById("J_other");
other.onmouseover=movein;
other.onmouseout=moveout;


// 鼠标移入动画
function movein(){
    document.getElementById(this.id).className="item active";
}
// 鼠标移出动画
function moveout(){
    document.getElementById(this.id).className="item uactive";
}