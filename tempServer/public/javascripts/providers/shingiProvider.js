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
    {id: "job001", index: "1", title: "[경력][2016년] 인재Pool", subTitle: "접수기간: 2016.01.04 ~ 2016.12.31", status: 1, date: "2016-01-01", author: "관리자", desc: "<p>신기씨엔에스에서는 우수 인재 채용을 위하여 상시적으로 인재를 모집하고 있습니다.</p><p>직무에 대한 내용을 채용안내에서 확인하시고, 아래 이메일 주소로 자기소개서 및 이력서를 보내주시면 됩니다.</p><br><br><p>이메일: <a href='mailto:smpark@sgcns.com'>smpark@sgcns.com</a></p><p>채용문의: 02.539.4144</p>", imgSrc: "images/icons/job_icon1.png"},
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
