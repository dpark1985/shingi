var h3Framework = angular.module('h3Framework')

.controller('inquiryCtrl', ['$http', '$window', '$shingi', function ($http, $window, $shingi) {
	var $inquiry = this;	//ControllerAs

	$inquiry.send = function() {
		if($inquiry.termsAgree) {
			//Validate First

			$shingi.sendInquiry($inquiry.formData);
			$inquiry.init();
		} else {
			$window.alert('개인정보수집에 동의해주시기 바랍니다.');
		}
	}

	$inquiry.init = function() {
		$inquiry.termsAgree = false;					//개인정보 보호 동의
		$inquiry.termsDisaree = false;				//개인정보 보도 비동의
		$inquiry.formData = {
			name: null,
			email: null,
			phone: null,
			category: null,
			select1: null,
			select2: null,
			title: null,
			content: null,
			file: null
		};
	};


	$inquiry.init();



}]);
