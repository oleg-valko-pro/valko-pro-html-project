const mix = require('laravel-mix');

mix
	.sass('resources/scss/styles.scss', 'public/css/')
	.js('resources/js/main.js', 'public/js/')
	.options({
		processCssUrls: false,
	});