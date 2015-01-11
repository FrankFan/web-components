define(['jquery'], function($){
	function Window(){
		
	}

	Window.prototype = {
		alert: function(content, handler){
			var boundingBox = $('<div class="window_boundingBox"></div>');
			boundingBox.appendTo('body');
			boundingBox.html(content);

			//v0.3 增加弹窗关闭按钮和回调入口
			var btn = $(' <input type="button" value="确定">');
			btn.appendTo(boundingBox);
			btn.click(function(){
				handler && handler(); //存在执行，否则什么都不做
				boundingBox.remove();
			});
		},

		confirm: function(){},

		promot: function(){}
	}

	return {
		Window: Window
	}
});