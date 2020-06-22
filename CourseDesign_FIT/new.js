
var code;
function createCode(n){
    code=" ";  
  var checkCode =document.getElementById("checkCode");
 
  var sourceStr= new Array('a','b','c',"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K",'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0',1,2,3,4,5,6,7,8,9,"中","文");
  
  for (var i=0; i<n; i++) {

var charIndex= Math.floor(Math.random()*64);
   
    code+=sourceStr[charIndex];
  }

  if (checkCode){

    checkCode.className="code";
    checkCode.value=code;
  }
}


function validate(){
var text = document.getElementById("input1").value;
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var p1 = document.getElementById("password").value;
var p2  = document.getElementById("repassword").value;

if(checkName(name))
	return ;
if(checkEmail(email))
	return ;
if(checkPassword(p1,p2))
	return ;
if(text==""){
	alert("请输入验证码！");
}else{


	if(text!=code){

		alert("输入的验证码不正确！");
		
		document.getElementById("input1").value = "";
		createCode(6);
	}
	else{

		alert("注册成功");
		
		}
	}
}

function checkstr(str)
{
	var n = 0;
	for(i = 0; i<str.length;i++)
	{
		var leg = str.charCodeAt(i);
		if(leg>255)
			n+=2;
		if(leg<=255)
		{
			alert("名字不能包含非汉字！");
			form.name.value="";
			form.name.focus();
			return false;
		}	
	}
	if(n<4 || n>8)
		return 2;
	else
		return 3;
}
function checkName( str )
{
	
	if(str=="")
	{
		alert("请输入姓名！");
		form.name.focus();
		return 1;
	}
	if(checkstr(str) == 2)
	{
		alert("真实姓名由两个及以上四个及以下的汉字组成！");
		form.name.value="";
		form.name.focus();
		return 1 ;
	}
	
}

function checkPassword(str1,str2){
	if(str1!=str2){
		alert("两次输入的密码不一致，请确保两次的密码相同！");
		return 1;
	}
}
	

