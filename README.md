Cookie notify
=============

Simpele jquery plugin om cookie melding weer te geven op een website.

	// in de <head>
	<link rel="stylesheet" type="text/css" href="css/cookienotify.css" />
	
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>
	<script type="text/javascript" src="js/jquery.cookienotify.js"></script>

 	// voor de </body>
	<script type="text/javascript">
		$.cookienotify();
	</script>

	// Opties
	$.cookienotify({
		lang: 		'en', 	// engelse melding
		message:	'Custom melding met <a href="#">link</a>.',
		button: 	'Button tekst'	
	});



