var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'about';
	locals.page.title = 'About ShanghaiJS';

	locals.organisers = [
		{ name: 'Fraser Xu', image: '/images/organiser-fraserxu.jpeg', twitter: 'fraserxu',       title: 'JavaScript Developer' },
		{ name: 'You?',     image: '/images/organiser-you.png',     twitter: 'yourname',   title: 'Become an organiser' }
	]

	view.render('site/about');

}
