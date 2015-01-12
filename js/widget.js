define(function(){

	function Widget(){
		this.handlers = {};
	}

	Widget.prototype = {
		// 非常经典的观察则模式实现
		on: function(type, handler){
			if(typeof this.handlers[type] === 'undefined'){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire: function(type, data){
			if(this.handlers[type] instanceof Array){
				var handlers = this.handlers[type];
				for(var i = 0, len = handlers.length; i < len; i++){
					handlers[i](data);
				}
				this.handlers[type] = []; // 此处有bug，会多次出发alert事件
			}
		}
	}

	return{
		Widget: Widget
	}
});