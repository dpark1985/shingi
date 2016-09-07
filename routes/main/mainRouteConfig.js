
var express = require('express');
var router = express.Router();



/*
	Angular.js Routing
*/
router.get('/*', function (req, res, next) {

	// response index.ejs
	res.render('index');
	// res.render('backup');
});



module.exports = router;
