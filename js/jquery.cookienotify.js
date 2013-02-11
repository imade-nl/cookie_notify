/*

	Notify visitor the site uses cookies
	Version : 0.1
	Dependencies: jQuery, $.cookie
	
	Author	: Pieter Beemsterboer
	Company : imade.nl
	
*/

(function( $ , cookie){


	// ------------------------------------  
	// Default Options
	// ------------------------------------
	
	var settings = {
	
    	// Functionality
		lang		:   "", 	// show language message ("nl" or "en")
		message		:	'Deze website maakt gebruik van cookies. <a href="/cookies">Meer informatie?</a>',	// overwrite language message (text)
		button		:	"Accepteren",	// overwrite language button (text)
		cookie_name	:	"cn-hide", 	// remember if users already clicked to "accept"
												   
		// messages						   
		messages	:	{ 
			nl	: 'Deze website maakt gebruik van cookies. <a href="/nl/cookies">Meer informatie?</a>',
			en	: 'This website uses cookies. <a href="/en/cookies">More information?</a>'
		},
					   
		// text in button
		buttons	:	{ 
			nl	: 'Accepteren',
			en	: 'Accept'
		}
    	
    };

		  
	// ------------------------------------  
	// Plugin methods
	// ------------------------------------

	var methods = {
		
		// ----------------------------------
		// init cookienotify
		
		init : function( options ) { 
			
			// if accept cookie is already set, stop init
			if( cookie(settings.cookie_name) ) return ;
			
			//set defaults
            if( options ) $.extend(settings, options);	
			
			// if language is set
			if(settings.lang != "")
			{
				// if language doesn't exist, set to english
				if( ! settings.messages[settings.lang] ) settings.lang = 'en';
				settings.message = settings.messages[settings.lang];
				settings.button = settings.buttons[settings.lang];				
			}
		
			// show the notification
			methods.show();
		},
		
		// ----------------------------------
		// show cookie notification
		
		show : function( ) {

			var cnWrapper = $('<div id="cn-wrapper"/>');
			var cnInner = $('<div id="cn-inner"/>');
			var cnButton = $('<a href="#" id="cn-accept"/>');
			
			cnButton.html(settings.button);
			cnInner.html(settings.message);
			cnInner.append(cnButton);
			cnWrapper.html(cnInner);
			$('body').prepend(cnWrapper);
			
			cnButton.click(function(e){
				e.preventDefault();
				methods.hide();
			});
		},
		
		// ----------------------------------
		// hide cookie notification
		
		hide : function( ) { 
		
			cookie(settings.cookie_name, true, { expires: 3650, path: '/' });
			$('#cn-wrapper').remove();
		}
	};
		  

	// ------------------------------------  
	// Start Cookie Notify
	// ------------------------------------
		
	$.cookienotify = function( method ) {
			
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}    
		
	};
		  

	
		
})(jQuery, $.cookie);