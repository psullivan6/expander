(function($){
	
	var index = 0;
	
	$.fn.extend({
		
		accessexpander: function( options ) {
			
			var defaults = {
				speed: 0,
				tabindex: 0,
				hover: false,
				expander: 'expander',
				expanded: 'expanded',
				aria: true
			};
			
			var options = $.extend(defaults, options);
			
			return this.each( function() {
				
				var $object = $(this),
				focused     = false,
				hovered     = false,
				id          = 'id-' + index,
				list        = 'list-' + index;
				
				$object.css({"cursor":"pointer"});
				
				$object.next().css({'position':'absolute','top':'-9999px','left':'-9999px'});
				
				if( $object.attr('id') === '' ) {
					$object.attr('id',id);
				}
				
				if( $object.next().attr('id') === '' ) {
					$object.next().attr('id',list);
				}
				
				if( $object.attr('tabindex') === undefined && options.tabindex !== false ) {
					$object.attr({'tabindex':''+options.tabindex+''});
				}
				
				if(options.aria === true) {
					$object.attr({'role':'button','aria-expanded':'false','aria-controls':$object.next().attr('id')});
					$object.next().attr({'aria-expanded':'false','aria-labelledby':$object.attr('id')});
				}
				
				index++;
				
				$object.bind('keyup', function( event ){
					
					var $selected = $(this);
					
					if( (options.hover === false) && (event.keyCode == '13') && ($selected.next().hasClass(options.expanded)) ) {
						
						$selected.removeClass(options.expander);
						
						$selected.next().fadeOut(options.speed, function() {
							
							$selected.next().css({'position':'absolute','display':''}).removeClass(options.expanded);
							
						});
						
						if(options.aria === true){
							
							$selected.attr('aria-expanded','false');
							
							$selected.next().attr('aria-expanded','false');
						}
						focused = false;
					} else if( (options.hover === false) && (event.keyCode == '13') && (!$selected.next().hasClass(options.expanded)) ) {
						
						$selected.addClass(options.expander);
						
						$selected.next().addClass(options.expanded).css({"position":"static",'display':'none'}).fadeIn(options.speed);
						
						if(options.aria === true) {
							
							$selected.attr('aria-expanded','false');
							
							$selected.next().attr('aria-expanded','false');
							
						}
						focused = true;
						
					}
					
				}); // keyup
				
				$object.focus(function( event ){
					
					var $selected = $(this);
					
					if( options.hover === true && !$selected.next().hasClass(options.expanded) ) {
						$selected.addClass(options.expander);
						$selected.next().addClass(options.expanded).css({"position":"static",'display':'none'}).fadeIn(options.speed);
						focused = true;
					}
					if(options.aria === true) {
						$selected.attr('aria-expanded','true');
						$selected.next().attr('aria-expanded','true');
					}
					if (hovered === true) {
						focused = true;
					}
				}); // focus
				
				$object.blur(function( event ){
					
					var $selected = $(this);
					
					if( options.hover === true && $selected.next().hasClass(options.expanded) && hovered !== true ) {
						
						$selected.removeClass(options.expander);
						
						$selected.next().fadeOut(options.speed, function() {
							
							$selected.next().css({'position':'absolute','display':''}).removeClass(options.expanded);
							
						});
						
						if(options.aria === true) {
							
							$selected.attr('aria-expanded','false');
							
							$selected.next().attr('aria-expanded','false');
							
						}
						focused = false;
					}
					
				}); // blur
				
				$object.hover(function( event ){
					
					var $selected = $(this);
					
					if( options.hover === true && !$selected.next().hasClass(options.expanded) ) {
						
						$selected.addClass(options.expander);
						
						$selected.next().addClass(options.expanded).css({"position":"static",'display':'none'}).fadeIn(options.speed);
						
						hovered = true;
						
						if(options.aria === true) {
							
							$selected.attr('aria-expanded','true');
							
							$selected.next().attr('aria-expanded','true');
							
						}
						
					}
					
					if(focused === true) {
						hovered = true;
					}
					
				}, function() {
					
					var $selected = $(this);
					if( options.hover === true && focused === false ) {
						
						$selected.removeClass(options.expander);
						
						$selected.next().fadeOut(options.speed, function() {
							
							$selected.next().css({'position':'absolute','display':''}).removeClass(options.expanded);
							
						});
						
						if(options.aria === true) {
							
							$selected.attr('aria-expanded','false');
							
							$selected.next().attr('aria-expanded','false');
							
						}
						
						hovered = false;
						
					} else if( options.hover === true && focused === true ) {
						
						hovered = false;
						
					}
				}); // hover
				
				$object.bind('click', function( event ){
					
					var $selected = $(this);
					
					if( !$selected.next().hasClass(options.expanded) ) {
						
						$selected.addClass(options.expander);
						
						$selected.next().addClass(options.expanded).css({"position":"static",'display':'none'}).fadeIn(options.speed);
						
						if(options.aria === true) {
							
							$selected.attr('aria-expanded','true');
							
							$selected.next().attr('aria-expanded','true');
							
						}
						
						focused = true;
						
					} else {
						
						$selected.removeClass(options.expander);
						
						$selected.next().fadeOut(options.speed, function() {
							
							$selected.next().css({'position':'absolute','display':''}).removeClass(options.expanded);
							
						});
						
						if(options.aria === true) {
							
							$selected.attr('aria-expanded','false');
							
							$selected.next().attr('aria-expanded','false');
							
						}
						
						focused = false;
					}
				}); // bind.click
				
			}); // this.each
			
		} // accessexpander
		
	}); // extend
	
})(jQuery);