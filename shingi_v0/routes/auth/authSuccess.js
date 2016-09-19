
var express = require('express');
var router = express.Router();

/*
	Everyauth authentication route
  http://127.0.0.1:3000/authSuccess/loginsuccess
*/
router.get('/logsuccess', function (req, res, next) {
	res.sendStatus(200);
});


module.exports = router;
