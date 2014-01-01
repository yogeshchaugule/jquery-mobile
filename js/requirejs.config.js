requirejs.config({
	"paths": {
		// requireJS plugins
		"css": "../external/requirejs/plugins/css",
		"json": "../external/requirejs/plugins/json",
		"normalize": "../external/requirejs/plugins/normalize",
		"step": "../external/requirejs/plugins/step",
		"text": "../external/requirejs/plugins/text",

		"styles": "../css",
		"tests": "../tests"
	},

	"shim": {
		"jquery.hashchange": [ "jquery" ],
		"jquery.ui.widget": [ "jquery" ],
		"widgets/jquery.ui.tabs": [ "jquery.ui.widget" ],
		"widgets/jquery.ui.core": [ "jquery" ]
	}
});
