define(['jquery'], function($){
	function Window(){
		this.cfg = {
			width: 500,
			height: 300,
			content: '',
			handler: null
		}
	}

	Window.prototype = {
		alert: function(cfg){
			//重构接口格式,参数全部由cfg参数传入
			var CFG = $.extend(this.cfg, cfg);

			var boundingBox = $('<div class="window_boundingBox"></div>');
			boundingBox.appendTo('body');
			boundingBox.html(CFG.content);

			//v0.3 增加弹窗关闭按钮和回调入口
			var btn = $(' <input type="button" value="确定">');
			btn.appendTo(boundingBox);
			btn.click(function(){
				CFG.handler && CFG.handler(); //存在执行，否则什么都不做
				boundingBox.remove();
			});

			//v0.4 remove the hard code in css files, use js to config
			// 将cfg的默认值和传入值做合并处理, 如果没有传就是用默认值，否则使用传入的值
			//$.extend(this.cfg, cfg); // extend内部对2个对象的key进行判断，如果有同名key就覆盖默认值

			boundingBox.css({
				width: CFG.width + 'px',
				height: CFG.height + 'px',
				left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
				top:  (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px'
			});
		},

		confirm: function(){},

		promot: function(){}
	}

	return {
		Window: Window
	}
});