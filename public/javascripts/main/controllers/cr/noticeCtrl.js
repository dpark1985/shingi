var h3Framework = angular.module('h3Framework')

.controller('noticeCtrl', ['$http', '$location', function ($http, $location) {
	var $notice = this;		//ControllerAs

	$notice.selectedItem = null;

	$notice.noticeList = [
		{id: "notice001", index: "1", title: "필리핀 부수양가 공항준공1", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice002", index: "2", title: "필리핀 부수양가 공항준공2", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice003", index: "3", title: "필리핀 부수양가 공항준공3", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice004", index: "4", title: "필리핀 부수양가 공항준공4", date: "2015-12-03", visits: "455", author: "관리자", desc: ""}
	]

	if($location.url() === "/cr/notice"){
		$notice.selectedItem = null;

	} else {
		var id = $location.url().split('/')[3];
		for(var i=0; i<$notice.noticeList.length; i++){
			if($notice.noticeList[i].id === id){
				$notice.selectedItem = $notice.noticeList[i];
			}
		}
	}

	$notice.selectNotice = function(list) {
		$notice.selectedItem = list;
		$location.path('cr/notice/'+list.id);
	}

	$notice.toBack = function() {
		$location.path('/cr/notice');
	}



}]);
