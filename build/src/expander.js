<<<<<<< HEAD
$(function() {
=======
(function($, window, document, undefined) {
	
	/**
	 * Function-level strict mode syntax.
	 *
	 * @see rgne.ws/XcZgn8
	 */
	
	'use strict';
	
	//--------------------------------------------------------------------------
	//
	// Local "globals":
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Javascript console.
	 *
	 * @see rgne.ws/12p2bvl
	 */
	
	var console = window.console || { log : function() {}, warn : function() {} },
	
	//----------------------------------
	
	/**
	 * The plugin namespace.
	 */
	
	EXP = 'expander',
	
	//--------------------------------------------------------------------------
	//
	// Defaults and settings:
	//
	//--------------------------------------------------------------------------
	
	defaults = {
		
		foo : '',
		bar : '',
		// ... add more defaults here.
		
		onInit      : $.noop, // Callback on plugin initialization; "this" is the context of the current element.
		onAfterInit : $.noop  // Callback after plugin initialization; IBID.
		
	}; // defaults
>>>>>>> origin/gh-pages
	
	$('.expand').each(function(k,v){
		
		var expandee = $(v).next(),
		//h = expandee.outerHeight();
		h = expandee.height();
		
		$(this).data('css', {ht : h});
		
	});
	
<<<<<<< HEAD
	hider($('.expand'), $('.expand').next());
	
=======
>>>>>>> origin/gh-pages
	function hider(e, f){
		
		f.css({
			'overflow': 'hidden',
			'height': 0,
			'margin': 0,
			'border': 'none',
			'padding': 0,
			'opacity': 0
		});
		
<<<<<<< HEAD
	};
=======
	}
>>>>>>> origin/gh-pages
	
	function shower(e, f){
		
		f.css({
			'overflow': '',
			'height': e.data('css').ht,
			'margin': '',
			'border': '',
			'padding': '',
			'opacity': ''
		});
		
<<<<<<< HEAD
	};
=======
	}
	
	hider($('.expand'), $('.expand').next());
>>>>>>> origin/gh-pages
	
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
			
<<<<<<< HEAD
		};
=======
		}
>>>>>>> origin/gh-pages
		
	});
	
	$('.expand').next().bind(function(request, sender, sendResponse){
		
		console.log(request, sender, sendResponse);
		
		if (request.method == 'getSelection') {
			
			console.log('SELECTED');
			
<<<<<<< HEAD
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
=======
		}
		
	});
	
	$.fn[EXP] = function(method) {
		
		if (methods[method]) {
			
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			
		} else if ((typeof method == 'object') || ( ! method)) {
			
			return methods.init.apply(this, arguments);
			
		} else {
			
			$.error('jQuery.' + EXP + ' thinks that ' + method + ' doesn\'t exist');
			
		}
		
	}; // $.fn[EXP]
	
}(jQuery, window, document));
>>>>>>> origin/gh-pages
