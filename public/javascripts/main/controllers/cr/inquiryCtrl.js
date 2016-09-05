var h3Framework = angular.module('h3Framework')

.controller('inquiryCtrl', ['$http', '$window', function ($http, $window) {
	var $inquiry = this;

	$inquiry.termsAgree = false;
	$inquiry.termsDisaree = false;
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
	}

	$inquiry.send = function() {
		if($inquiry.termsAgree) {

		} else {
			$window.alert('개인정보수집에 동의해주시기 바랍니다.');
		}

	}
}]);
