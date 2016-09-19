
var https = require('https');


// https://www.ibizplus.co.kr/main
module.exports = {
  sendSMS: function (req, res){
    console.log('testing');
  	var options = {
  		host: 'rest.supersms.co',
  		path: 'sms/xml?id=' + encodeURIComponent('aitch3') +
  		'&pwd=' + encodeURIComponent('8610WAOBD85859QA0391') +
  		'&from=' + encodeURIComponent('827075247713') +
  		'&to_country=' + encodeURIComponent('82') +
  		'&to=' + encodeURIComponent('1071129084') +
  		'&message=' + encodeURIComponent('[버플] 본인인증번호는 1234 입니다. 정확히 입력해주세요.') +
  		'&report_req=' + encodeURIComponent(1)
  	};
  	var resData = "";

  	var sms = https.request(options);
  	sms.end();

  	var responseData = '';
  	sms.on('response', function (result){
  		result.on('data', function(chunk){
  			responseData += chunk;
  		});
  		result.on('end', function(){
  			res.json({res: responseData});
  		});
  	});
  }


}
