var h3Framework = angular.module('h3Framework')

.controller('noticeCtrl', ['$http', '$location', '$shingi', function ($http, $location, $shingi) {
	var $notice = this;		//ControllerAs

	$notice.selectedItem = null;
	$notice.noticeList = $shingi.getNoticeList();

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
