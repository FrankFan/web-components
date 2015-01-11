require.config({
	paths: {
		jquery: 'jquery-1.10.2'
	}
});

require(['jquery', 'window'], function($, w){
	$('#a').click(function(){
		new w.Window().alert('welcome!', function(){
			alert('you click the button');
		});
	});
});

