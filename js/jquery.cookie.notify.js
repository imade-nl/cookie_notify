
// notify cookie usage

(function($){
 
    $.fn.extend({
         
        //pass the options variable to the function
        cookieNotify: function(options) {
 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
				'info_text' 	: 'Deze website maakt gebruik van cookies. <a href="/cookies">Meer informatie?</a>',
				'accept_text' 	: 'Toestaan',
				'reject_text' 	: 'Weigeren',
				'reject_btn'	: true
            };
                 
            var options =  $.extend(defaults, options);
 
            return this.each(function() {
				
				// if cookieNotify has already been set: stop.
				if( $.cookie('cookie_accept') != null )
					return;
				
            	var o = options;
            	var obj = $(this);
				var cnWrapper = $('<div id="cn-wrapper"/>');
				var cnInner = $('<div id="cn-inner"/>');
				var cnInfo =  $('<span id="cn-info-wrapper"/>');
				var cnBtns =  $('<span id="cn-btn-wrapper"/>');
				var cnAccept = $('<a href="#" id="cn-accept"/>');
				var cnReject = $('<a href="#" id="cn-reject"/>');
				
				cnReject.html(o.reject_text);
				cnAccept.html(o.accept_text);
				cnBtns.append(cnAccept);
				if(o.reject_btn){ cnBtns.append(cnReject); }
				cnInfo.html(o.info_text);
				cnInner.append(cnInfo, cnBtns);
				cnWrapper.html(cnInner);
				obj.prepend(cnWrapper);
				
				cnAccept.click(function(e){
					e.preventDefault();
					$.cookie('cookie_accept', true, { expires: 3650, path: '/' });
					cnWrapper.hide();
					$('body').removeClass('cn-visible');
				});
				
				
				if(o.reject_btn)
				{
					cnReject.click(function(e){
						e.preventDefault();
						$.cookie('cookie_accept', false, { expires: 3650, path: '/' });
						cnWrapper.hide();
						$('body').removeClass('cn-visible');
					});
				}

				// add class to body so position off background images can be adusted.
				$('body').addClass('cn-visible');
            });
        }
    });
     
})(jQuery);