/**
 * Expander
 * An accessible jQuery slideToggler, accordian, or expander.
 *
 * @author Patrick Sullivan
 * @link http://psullivan6.com
 * @docs https://github.com/psullivan6/expander
 * @copyright Copyright (c) 2013 Patrick Sullivan.
 * @license Released under the Apache License, Version 2.0.
 * @version 1.0.0
 * @date 2013/05/02
 */

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
	
	$('.expand').each(function(k,v){
		
		var expandee = $(v).next(),
		//h = expandee.outerHeight();
		h = expandee.height();
		
		$(this).data('css', {ht : h});
		
	});
	
	function hider(e, f){
		
		f.css({
			'overflow': 'hidden',
			'height': 0,
			'margin': 0,
			'border': 'none',
			'padding': 0,
			'opacity': 0
		});
		
	}
	
	function shower(e, f){
		
		f.css({
			'overflow': '',
			'height': e.data('css').ht,
			'margin': '',
			'border': '',
			'padding': '',
			'opacity': ''
		});
		
	}
	
	hider($('.expand'), $('.expand').next());
	
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
			
		}
		
	});
	
	$('.expand').next().bind(function(request, sender, sendResponse){
		
		console.log(request, sender, sendResponse);
		
		if (request.method == 'getSelection') {
			
			console.log('SELECTED');
			
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