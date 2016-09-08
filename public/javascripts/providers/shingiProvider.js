var h3FrameworkProviders = angular.module('h3FrameworkProviders')

.factory('$shingi', ['$http', '$window', function($http, $window){


  var noticeList = [
		{id: "notice001", index: "1", title: "필리핀 부수양가 공항준공1", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice002", index: "2", title: "필리핀 부수양가 공항준공2", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice003", index: "3", title: "필리핀 부수양가 공항준공3", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice004", index: "4", title: "필리핀 부수양가 공항준공4", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
    {id: "notice005", index: "5", title: "필리핀 부수양가 공항준공5", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice006", index: "6", title: "필리핀 부수양가 공항준공6", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
    {id: "notice007", index: "7", title: "필리핀 부수양가 공항준공7", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
    {id: "notice008", index: "8", title: "필리핀 부수양가 공항준공8", date: "2015-12-03", visits: "455", author: "관리자", desc: ""},
		{id: "notice009", index: "9", title: "필리핀 부수양가 공항준공9", date: "2015-12-03", visits: "455", author: "관리자", desc: ""}
	];

  var jobList = [
    {id: "job001", index: "1", title: "[경력][2016년] 인재Pool", subTitle: "접수기간: 2016.01.04 ~ 2016.12.31", status: 1, date: "2016-02-19", visit: "455", author: "관리자", desc: "", imgSrc: "http://dummyimage.com/50x50/2e62b3/fff&text=SS"},
    {id: "job001", index: "2", title: "[경력][2016년] 인재Pool", subTitle: "접수기간: 2016.01.04 ~ 2016.12.31", status: 1, date: "2016-02-19", visit: "455", author: "관리자", desc: "", imgSrc: "http://dummyimage.com/50x50/2e62b3/fff&text=SS"},
    {id: "job001", index: "3", title: "[경력][2016년] 인재Pool", subTitle: "접수기간: 2016.01.04 ~ 2016.12.31", status: 1, date: "2016-02-19", visit: "455", author: "관리자", desc: "", imgSrc: "http://dummyimage.com/50x50/2e62b3/fff&text=SS"},
    {id: "job002", index: "4", title: "[경력][2016년] 인재Pool", subTitle: "접수기간: 2016.01.04 ~ 2016.12.31", status: 0, date: "2016-02-19", visit: "455", author: "관리자", desc: "", imgSrc: "http://dummyimage.com/50x50/2e62b3/fff&text=SS"}
	];

  return {
    /**
		 *	@name          getNoticeList
		 *
		 *	@description   Pull notice list
		 *
		 *	@param
		 *
		 *	@usage
     *  $shingi.getNoticeList();
		*/
    getNoticeList: function() {
      return noticeList;
    },

    /**
     *	@name          sendInquiry
     *
     *	@description   Send Inquiry
     *
     *	@param         {object}
     *
     *	@usage
     *  $shingi.sendInquiry(data);
    */
    sendInquiry: function(data) {
      // setup rest api
      var url = "http://www.aitch3.com";
      $http.post(url, data).then(function(res){
        console.log(res);
        $window.alert('문의내용이 등록되었습니다.'+'\n'+'감사합니다.');
      }, function(err){
        console.log('err');
        $window.alert('입력하신 정보를 확인해주시기 바랍니다.');
      });
    },

    /**
		 *	@name          getJobList
		 *
		 *	@description   Pull job list
		 *
		 *	@param
		 *
		 *	@usage
     *  $shingi.getJobList();
		*/
    getJobList: function() {
      return jobList;
    }
  };



}]);
