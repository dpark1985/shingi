
var express = require('express');
var router = express.Router();



/*
	Angular.js Routing
*/
router.get('/*', function (req, res, next) {
	// Count every web access
	var today = new Date();
	var yyyy = today.getFullYear().toString();
	if(today.getMonth() < 9){ var mm = "0"+ (today.getMonth()+1).toString(); }
	else{ var mm = (today.getMonth()+1).toString(); }
	if(today.getDate() < 10){ var dd = "0"+ today.getDate().toString(); }
	else { var dd = today.getDate().toString(); }
	var t = yyyy + mm + dd;
	req.db.admin.find({"vDate": t}, function (err, data){
		if (err) console.log(err);
		if(data.length === 0){
			req.db.admin.insert({
				vDate: t,
				count: 1
			}, function (err, result){
				console.log(result);
			});
		} else {
			req.db.admin.update({"vDate": t},
			{"$inc" : {"count": 1}}, function (err, result){
			});
		}
	});


	// response index.ejs
	res.render('index');
});



module.exports = router;
