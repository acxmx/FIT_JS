function clock()
{
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	
	hour = hour>=10?hour:("0" + hour);
	minute = minute>=10?minute:("0" + minute);
	second = second>=10?second:("0" + second);
	
	var hou = new String(hour);
	var n11 = hou.substr(0,1);
	var n21 = hou.substr(1,1);
	var minu = new String(minute);
	var n31 = minu.substr(0,1);
	var n41 = minu.substr(1,1);
	var sec = new String(second);
	var n51 = sec.substr(0,1);
	var n61 = sec.substr(1,1);
	
	document.getElementById("n1").src="lcd/"+n11+".gif";
	document.getElementById("n2").src="lcd/"+n21+".gif";
	document.getElementById("n3").src="lcd/"+n31+".gif";
	document.getElementById("n4").src="lcd/"+n41+".gif";
	document.getElementById("n5").src="lcd/"+n51+".gif";
	document.getElementById("n6").src="lcd/"+n61+".gif";
	setTimeout("clock()",1000);
}

 function visible(a,i){ 
  a.style.opacity=i;
    }
	