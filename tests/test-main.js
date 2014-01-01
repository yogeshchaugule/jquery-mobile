var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/_test\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

requirejs.config({
	// Karma serves files from "/base"
	baseUrl: "/base/js",

	paths: {
		"jquery": "jquery",

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

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});
