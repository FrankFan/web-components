require.config({
	paths: {
		jquery: 'jquery-1.10.2',
		jqueryUI: 'http://code.jquery.com/ui/1.10.4/jquery-ui'
	}
});

require(['jquery', 'window'], function($, w){
	$('#a').click(function(){
		var win = new w.Window();
		win.alert({
			title: '提示',
			content: 'welcome!',
			width: 300,
			height: 150,
			y : 50,
			hasCloseBtn: true,
			text4AlertBtn: 'OK',
			dragHandle: '.window_header',
			// skinClassName: 'window_skin_a',
			handler4AlertBtn: function(){
				alert('you click the alert button');
			},
			handler4CloseBtn: function(){
				alert('you click the close button');
			}
		}).on('alert', function(){ alert('the second alert handler');});

		// win.on('alert', function(){alert('you click the alert button');});
		// win.on('alert', function(){alert('the second alert handler');});
		// win.on('alert', function(){alert('the third alert handler');});
		win.on('close', function(){alert('you click the close button');});
		// win.on('close', function(){alert('the second close handler');});		
	});


	$('#b').click(function(){
		var win = new w.Window();

		win.confirm({
			title: '系统消息',
			content: '您确定要删除这个文件吗?',
			width: 300,
			height: 150,
			y: 50,
			text4ConfirmBtn: '是',
			text4CancelBtn: '否',
			dragHandle: '.window_header'
		}).on('confirm', function(){
			alert('确定');
		}).on('cancel', function(){
			alert('取消');
		});
	});
});

