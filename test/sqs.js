var AWS      = require( 'aws-sdk' )
	, sqs      = new AWS.SQS( { region: 'us-east-1' } )
	, chai     = require( 'chai' )
	, cap      = require( 'chai-as-promised' )
	, q        = require( 'q' )
	, deferred = q.defer()
	, assert   = require( 'assert' )

it( 'test connection to sqs', function () {
	deferred.resolve( function () {
		sqs.listQueues( {}, function (err, rsp) {
			if (err) {
				assert( 0, 'sqs failed to list queues' );
			}
			return assert( rsp['ResponseMetadata'], 'response looks like expected' );
		} );

		return deferred.promise;
	} )
} );
