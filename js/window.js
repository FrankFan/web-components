define(['jquery'], function($){
	function Window(){
		this.cfg = {
			width: 500,
			height: 300
		}
	}

	Window.prototype = {
		alert: function(content, handler, cfg){
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

			//v0.4 remove the hard code in css files, use js to config
			// 将cfg的默认值和传入值做合并处理, 如果没有传就是用默认值，否则使用传入的值
			$.extend(this.cfg, cfg); // extend内部对2个对象的key进行判断，如果有同名key就覆盖默认值
			boundingBox.css({
				width: this.cfg.width + 'px',
				height: this.cfg.height + 'px',
				left: (this.cfg.x || (window.innerWidth - this.cfg.width) / 2) + 'px',
				top:  (this.cfg.y || (window.innerHeight - this.cfg.height) / 2) + 'px'
			});
		},

		confirm: function(){},

		promot: function(){}
	}

	return {
		Window: Window
	}
});