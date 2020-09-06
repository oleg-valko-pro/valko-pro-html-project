const mix = require('laravel-mix');

mix.js('resources/js/main.js', 'public/js/')
mix.sass('resources/sсss/styles.scss', 'public/css/');
mix.options({
	processCssUrls: false,
	});