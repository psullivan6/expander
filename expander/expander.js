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
	
	$(document).bind('mousedown keydown', function(){
		
		if (window.getSelection){
			
			var obj = window.getSelection();
			
			console.log(document.activeElement, obj);
			
		};
		
	});
	
	$('.expand').next().bind(function(request, sender, sendResponse){
		
		console.log(request, sender, sendResponse);
		
		if (request.method == 'getSelection') {
			
			console.log('SELECTED');
			
		};
		
	});
	
	
	
	
	
	
	
	
	

		function GetSelectedText () {
			var selText = "";
			if (window.getSelection) {  // all browsers, except IE before version 9
				if (document.activeElement && (document.activeElement.tagName.toLowerCase () == "textarea" || document.activeElement.tagName.toLowerCase () == "input")) {
					var text = document.activeElement.value;
					selText = text.substring (document.activeElement.selectionStart, document.activeElement.selectionEnd);
				} else {
					var selRange = window.getSelection ();
					selText = selRange.toString ();
				}
			} else {
				if (document.selection.createRange) { // Internet Explorer
					var range = document.selection.createRange ();
					selText = range.text;
				}
			}
			
			if (selText !== "") {
				alert (selText);
			}
		}
	
});