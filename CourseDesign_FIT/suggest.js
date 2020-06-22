// JavaScript Documentvar flag=true;
function fun(){
var time=new Date();
form.date.value=time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
}
setInterval("fun()",1000);
function check(){
var name=form.user.value; 
var title=form.title.value;	
var con=form.content.value;
if(name==""||name==null){
	 alert("请输入留言人！");
	 return false;
}
if(name.length<4||name.length>10){
	 alert("留言人的长度不符合要求！");
	 return false;
}
for(var a=0;a<name.length;a++){
 flag=flag&&(name.charCodeAt(a)>255);
}
if(flag==false){
	alert("留言人不是中文汉字！");
	 return false;
}
if(title==""||title==null){
	 alert("请输入留言标题");
	 return false;
}
if(con==""||con==null){
	 alert("请输入留言内容");
	 return false;
}
alert("留言成功！");
return true;
}
function test(){
  var content = document.getElementById("feedBack").value;
  if(content.length>100){
	content = content.substr(0,100);
   }
 document.getElementById("feedBack").value=content;
document.getElementById("number").innerHTML=content.length;
}