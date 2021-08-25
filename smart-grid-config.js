var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
	outputStyle: 'scss', /* less || scss || sass || styl */
	columns: 12, /* number of grid columns */
	offset: '30px', /* gutter width px || % || rem */
	mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
	container: {
		maxWidth: '1200px', /* max-width оn very large screen */
		fields: '30px' /* side fields */
	},
	breakPoints: {
		xl: {
			width: '1400px',
		},
		lg: {
			width: '1200px',
		},
		md: {
			width: '992px',
		},
		sm: {
			width: '768px',
			fields: '15px' /* set fields only if you want to change container.fields */
		},
		xs: {
			width: '576px'
		}
	}
};

smartgrid('./resources/scss', settings);