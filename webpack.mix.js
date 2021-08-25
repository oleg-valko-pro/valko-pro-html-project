const mix = require('laravel-mix');
require('mix-html-builder');
mix
	.html({
	htmlRoot: ('resources/html/*.html'),
	output: 'public',
	partialRoot: 'resources/html/partials',
	layoutRoot: 'resources/html/layouts',
	minify: {
		removeComments: true
	}
	})
	.sass('resources/scss/styles.scss', 'public/assets/css/')
	.js('resources/js/main.js', 'public/assets/js/')
	.options({
		processCssUrls: false,
		postCss: [
			require('css-mqpacker'),
		],
	});
