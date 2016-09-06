
var express = require('express');
var router = express.Router();



/*
	Angular.js Routing
*/
router.get('/*', function (req, res, next) {

	// response index.ejs
	res.render('index');
});



module.exports = router;
