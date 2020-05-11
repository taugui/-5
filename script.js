// 设置正确的用户名和密码

var correctUsername = "kido";
var correctPassword = "shiwuxuetang";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    //在下面加入代码
if( username === correctUsername && password ===correctPassword ){
    alert("恭喜你登录成功！");
    
}else if( username === correctUsername || password !==correctPassword ){
	alert("Sorry!你的密码可能存在问题");
    
}else if( username !== correctUsername || password ===correctPassword ){
	alert("Sorry!你的用户名可能存在问题");
    
}else if(username ===correctUsername || password=== null){
	alert("你好像忘记输入密码了");
    
}else if(username ===null || password=== correctUsername){
	alert("你好像忘记输入用户名了");
    
}
    
});

$("button").click(function() {
    alert("账号：kido     密码：shiwuxuetang ");
});



