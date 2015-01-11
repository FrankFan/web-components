
define(['jquery', 'jqueryUI'], function($, $UI){
	function Window(){
		this.cfg = {
			width: 500,
			height: 300,
			title: '系统消息',
			content: '',			
			hasCloseBtn: false,
			hasMask: true,
			isDraggable: true,
			dragHandle: null,
			skinClassName: null,
			text4AlertBtn: '确定',
			handler4AlertBtn: null,
			handler4CloseBtn: null
		};

		this.handlers = {}
	}

	Window.prototype = {
		
		alert: function(cfg){
			
			var CFG = $.extend(this.cfg, cfg),
				boundingBox = $(
				'<div class="window_boundingBox">' +
					'<div class="window_header">' + CFG.title + '</div>' +
					'<div class="window_body">' + CFG.content + '</div>' +
					'<div class="window_footer"><input class="window_alertBtn" type="button" value="' + CFG.text4AlertBtn + '"></div>' +
				'</div>'
				),
				btn = boundingBox.find('.window_alertBtn'),
				mask = null,
				that = this;

			if(CFG.hasMask){
				mask = $('<div class="window_mask"></div>');
				mask.appendTo('body');
			}

			boundingBox.appendTo('body');

			btn.click(function(){
				//CFG.handler4AlertBtn && CFG.handler4AlertBtn(); //存在执行，否则什么都不做
				boundingBox.remove();
				mask && mask.remove();
				that.fire('alert');
			});

			if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					//CFG.handler4CloseBtn && CFG.handler4CloseBtn();
					boundingBox.remove();
					mask && mask.remove();
					that.fire('close');
				});
			}

			//改代码了, 先注册事件
			if(CFG.handler4AlertBtn){
				this.on('alert', CFG.handler4AlertBtn);
			}

			if(CFG.handler4CloseBtn){
				this.on('close', CFG.handler4CloseBtn);
			}

			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			}

			// jquery UI 的特性
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({
						handle: CFG.dragHandle
					});
				}else{
					boundingBox.draggable();
				}				
			}

			boundingBox.css({
				width: CFG.width + 'px',
				height: CFG.height + 'px',
				left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
				top:  (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px'
			});
		},

		confirm: function(){},

		promot: function(){},

		// 非常经典的观察则模式实现
		on: function(type, handler){
			if(typeof this.handlers[type] === 'undefined'){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
		},

		fire: function(type, data){
			if(this.handlers[type] instanceof Array){
				var handlers = this.handlers[type];
				for(var i = 0, len = handlers.length; i < len; i++){
					handlers[i](data);
				}
			}
		}
	}

	return {
		Window: Window
	}
});