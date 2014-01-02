define([
	"jquery",
	"text!./fixture.html",
	"widgets/page"
], function( $, fixture ) {
	$.mobile.page.prototype.options.keepNative = "input.should-be-native";
	if ( $( "#jqm-module-fixture" ).length ) {
		$( "#jqm-module-fixture" ).html( fixture );
	} else {
		$( "body" ).append( "<div id='jqm-module-fixture'>" + fixture + "</div>" );
	}
});
