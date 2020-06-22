  var id = 1;
	//添加行的方法
	function addTr(tab) {
		//根据参数tab，通过id选择器获取表格对象
		var tr= ______________________________________;
		//在表格的末尾，添加一行
		var newTr = tr.insertRow(tr.rows.length);
		//给这个行设置id属性，以便于管理（删除）
		newTr.id = 'tr' + id;
		
		//在该行添加2个单元格，即2列    
		var newTd0 = newTr.insertCell();
		//设置对齐方式（只是告诉你，可以以这种方式来设置任何它有的属性）
		newTd0.align="right";
		var newTd1 = newTr.insertCell();
		//如果是第一个table
		if(tab=="tab1"){
			//设置列内容和属性
			//在第一列元素的开头插入内容
			$(newTd0).___________________("<select id='field'"+id+" name='field0'>"+$("#"+tab+" select").html()+"</select>");
		//在第二列元素的结尾插入内容
		$(newTd1).______________('<input type="text" id="con" '+id+' name="con" size="60"/>');
		}//如果是第二个table，需要创建三个单元格，并分别设置三个单元格的内容和属性
		else {
			newTd0.innerHTML='<select id="authorlogic"'+id+'   name="authorlogic" ><option value="OR">或者</option><option value="AND">并且</option></select><label>作者：</label>';
			newTd1._______________ ='<input type="text" id="author" '+id+' name="author" />'
			var newTd2 = newTr.insertCell();
			newTd2.innerHTML ='<label>作者单位：</label><input type="text" requeired id="affiliation" name="affiliation" />';}
		id++;
	}

	//移除行的方法
	function moveTr(tab) {
		//根据参数tab，通过id选择器获取表格对象
		var tr= ______________________________________;
		//如果行数大于1，则直接删除最后一行
		if(tr.rows.length>1)tr.deleteRow(tr.rows.length-1);
		//否则，弹出提示信息"只剩下最后一行了，不能再删除了！"
		else alert("只剩下最后一行了，不能再删除了！");
	}
	
	//验证文本框输入不为空
	function inputNull(tid) {
		var input_cart = document.getElementsByTagName("input");
		var input_all = 0;
		for ( var i = 0; i < input_cart.length; i++) {
			if (input_cart[i].type == "text" && input_cart[i].value == "") {
				input_all = input_all + 1;
			}
		}
		if (input_all != 0) {
			alert("对不起，请确认是否填写完整！");
			return false;
		}
		else
		{
			tid++;
			//获得表格对象
			var tb = document.getElementById("Tab");
			if(tb.rows.length == tid+2)
			{
			    addTr(); 
			}
		}
	}