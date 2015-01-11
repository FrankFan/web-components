
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
		}
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
				mask = null;

			if(CFG.hasMask){
				mask = $('<div class="window_mask"></div>');
				mask.appendTo('body');
			}

			boundingBox.appendTo('body');

			btn.click(function(){
				CFG.handler4AlertBtn && CFG.handler4AlertBtn(); //存在执行，否则什么都不做
				boundingBox.remove();
				mask && mask.remove();
			});

			if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					CFG.handler4CloseBtn && CFG.handler4CloseBtn();
					boundingBox.remove();
					mask && mask.remove();
				});
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

		promot: function(){}
	}

	return {
		Window: Window
	}
});