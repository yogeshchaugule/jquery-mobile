define([
	"jquery",
	"text!./fixture.html"
], function( $, fixture ) {
	if ( $( "#jqm-module-fixture" ).length ) {
		$( "#jqm-module-fixture" ).html( fixture );
	} else {
		$( "body" ).append( "<div id='jqm-module-fixture'>" + fixture + "</div>" );
	}
});
