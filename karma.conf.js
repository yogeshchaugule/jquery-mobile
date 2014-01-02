// Karma configuration
// Generated on Tue Dec 31 2013 13:17:23 GMT-0700 (MST)

module.exports = function ( config ) {
	config.set({
		// frameworks to use
		frameworks: ["qunit", "requirejs"],


		// list of files / patterns to load in the browser
		files: [
			{pattern: "external/**/*.js", included: false},
			{pattern: "js/**/*.js", included: false},
			{pattern: "tests/unit/**/*.js", included: false},
			{pattern: "tests/unit/**/*.css", included: false},
			{pattern: "tests/unit/**/*.html", included: false},
			{pattern: "tests/util/*.js", included: false},
			{pattern: "package.json", included: false},

			// simple patterns to load the needed testfiles
			{pattern: "css/**", included: false},

			"tests/test-main.js"
		],


		// list of files to exclude
		exclude: [
			"js/jquery.mobile.js"
		],


		// test results reporter to use
		// possible values: "dots", "progress", "junit", "growl", "coverage"
		reporters: [ "progress", "coverage" ],

		preprocessors: { "js/**/*.js": [ "coverage" ] },

		coverageReporter: {
			type: "lcov",
			dir: "coverage/"
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_DEBUG,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers: ["ChromeCanary"],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		plugins: [
			'karma-requirejs',
			'karma-qunit',
			'karma-chrome-launcher'
		]
	});
};
