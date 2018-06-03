var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'cv';

	// Load the galleries by sortOrder
	view.query('items', keystone.list('Cv').model.find().sort('sortOrder'));

	// Render the view
	view.render('cv');

};
