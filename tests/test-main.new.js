var tests = [];
for ( var file in window.__karma__.files ) {
	if ( window.__karma__.files.hasOwnProperty( file ) ) {
		if ( /_test\.js$/.test( file ) ) {
			var parts = file.split( "." );
			parts.pop();
			file = parts.join( "." );
			parts = file.split( "/" );
			parts.shift();
			parts.shift();
			file = parts.join( "/" );
			console.log( "pushing '" + file );
			tests.push( file );
		}
	}
}

requirejs.config({
	// Karma serves files from "/base"
	baseUrl: "/base/js",

	paths: {
		"jquery": "jquery",

		"async": "../external/async/async",

		"css": "../external/requirejs/plugins/css",
		"text": "../external/requirejs/plugins/text",
		"normalize": "../external/requirejs/plugins/normalize",
		"json": "../external/requirejs/plugins/json",
		"step": "../external/requirejs/plugins/step",

		"styles": "../css",
		"tests": "../tests"
	},

	shim: {
		"jquery.hashchange": [ "jquery" ],
		"jquery.ui.widget": [ "jquery" ],
		"widgets/jquery.ui.tabs": [ "jquery.ui.widget" ],
		"widgets/jquery.ui.core": [ "jquery" ]
	},

	waitSeconds: 15
});

require([ "jquery", "async" ], function( $, async ) {
	var deferred,
		start = window.__karma__.start,
		theEnd = window.__karma__.complete;

	window.QUnit.done(function() {
		deferred.resolve();
	});

//	window.__karma__.loaded = $.noop;
//	window.__karma__.complete = $.noop;

	async.eachSeries(tests,
		function( test, next ){
			deferred = $.Deferred();

			deferred.then(function() {
				QUnit.stop();

//				require( [ "/base/node_modules/karma-qunit/lib/adapter.js" ], function() {
					next();
//				});
			});

			require( [ test ], function() {
				console.log( test + " loaded" );
				start(window.__karma__.config);
			});
		},
		function( err ) {
			if ( err ) {
				console.error( err );
			} else {
				console.log( "tests are done!")
			}
//			theEnd({
//				coverage: window.__coverage__
//			});
		}
	);

});
