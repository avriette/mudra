var jsbot    = require( 'jsbot' )
	, instance = jsbot.createJSBot('jsbottest')
	, assert   = require( 'assert' )
	, chai     = require( 'chai' );


it( 'jsbot: connect', function () {
	instance.addConnection(
		'freenode', 'irc.freenode.net', 6667, 'mudra_', function(e) {
			instance.join( e, '#mudra' );
		}.bind( this )
	);
	it( 'jsbot: addListener', function () {
		return assert( instance.addListener('JOIN', 'join', function(e) {
			e.reply('I love ' + e.user);
		} ), 'jsbot: addListener w/ state & reply' )
	} );
	instance.connectAll();
} );


