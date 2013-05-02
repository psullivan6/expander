$(function() {
	
	$('.expand').each(function(k,v){
		
		var expandee = $(v).next(),
		//h = expandee.outerHeight();
		h = expandee.height();
		
		$(this).data('css', {ht : h});
		
	});
	
	hider($('.expand'), $('.expand').next());
	
	function hider(e, f){
		
		f.css({
			'overflow': 'hidden',
			'height': 0,
			'margin': 0,
			'border': 'none',
			'padding': 0,
			'opacity': 0
		});
		
	};
	
	function shower(e, f){
		
		f.css({
			'overflow': '',
			'height': e.data('css').ht,
			'margin': '',
			'border': '',
			'padding': '',
			'opacity': ''
		});
		
	};
	
	$('.expand').click(function(){
		
		var t = $(this);
		
		t.toggleClass('clicked');
		
		if (t.hasClass('clicked')){
			
			shower(t, t.next());
			
		} else{
			
			hider(t, t.next());
			
		}
		
		
		
	});
	
});