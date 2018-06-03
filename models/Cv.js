var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * CV Model
 * =============
 */

var Cv = new keystone.List('Cv', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Cv.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	startDate: { type: Date },
	endDate: { type: Date },
	description: { type: String }
});


Cv.register();
