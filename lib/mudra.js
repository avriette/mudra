var AWS   = require( 'aws-sdk' )
	, sqs   = new AWS.SQS( { region: 'us-east-1' } )
	, heap  = { }
	, jsbot = require( 'jsbot' )

sqs.listQueues( {}, function (err, list) {
	if (err) {
		console.log( 'error connecting to sqs: ', err.stack );
		process.exit( -255 );
	}
} );
