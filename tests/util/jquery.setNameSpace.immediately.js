(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory);
	} else {
		// Browser globals
		factory( root.jQuery );
	}
}(this, function ( $ ) {
	//set namespace for unit test markup
	$.mobile.ns = "nstest-";
	$.support.inlineSVG = $.noop;
}));