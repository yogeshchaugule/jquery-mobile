(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory);
	} else {
		// Browser globals
		factory( root.jQuery );
	}
}(this, function ( $ ) {
	//set namespace for unit test markp
	$( document ).bind( "mobileinit", function(){
		$.mobile.ns = "nstest-";
		$.support.inlineSVG = $.noop;
	});
}));
