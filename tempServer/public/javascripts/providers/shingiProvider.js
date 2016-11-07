var h3FrameworkProviders = angular.module('h3FrameworkProviders')

.factory('$shingi', ['$http', '$window', function($http, $window){


  var noticeList = [
		{id: "notice001", index: "1", title: "홈페이지 오픈", date: "2015-12-03", visits: "455", author: "관리자", desc: "지속적인 관심과 사랑에 보답하기 위해 신기씨앤에스 공식 홈페이지를 오픈 하였습니다.<br><br>고객의 신뢰와 가치 극대화를 위해 최선의 노력을 하고 있으며, 기본과 원칙을 지키며 변화와 혁신을 거듭하는 기업이 되겠습니다.<br><br>감사합니다."},
	];

  var jobList = [
    {id: "job001", index: "1", title: "[경력][2016년] 인재Pool", subTitle: "접수기간: 2016.01.04 ~ 2016.12.31", status: 1, date: "2016-01-01", author: "관리자", desc: "<p>신기씨엔에스에서는 우수 인재 채용을 위하여 상시적으로 인재를 모집하고 있습니다.</p><p>직무에 대한 내용을 채용안내에서 확인하시고, 아래 이메일 주소로 자기소개서 및 이력서를 보내주시면 됩니다.</p><br><br><br><br><p>이메일: <a href='mailto:smpark@sgcns.com'>smpark@sgcns.com</a></p><p>채용문의: 02.539.4144</p>", imgSrc: "images/icons/job_icon1.png"},
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
