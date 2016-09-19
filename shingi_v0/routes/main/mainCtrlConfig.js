

var express = require('express');
var router = express.Router();
var fs = require('fs');
var util = require('util');


var smsCtrl = require('./controllers/sms');

// http://127.0.0.1:3000/mainCtrl/




// SMS message tool
router.get('/sms', function (req, res, next){
	console.log('testing');
	smsCtrl.sendSMS(req, res);

});




module.exports = router;
