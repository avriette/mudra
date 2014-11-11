var AWS   = require( 'aws-sdk' )
	, sqs   = new AWS.SQS( { region: 'us-east-1' } )
	, heap  = { }
	, jsbot = require( 'jsbot' )

