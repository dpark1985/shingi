var h3Framework = angular.module('h3Framework')

.controller('pConstructCtrl', ['$http', function ($http) {
	var $pConstruct = this;


		// cable menu config
		$pConstruct.routeConfig = [
			{name: '전기공사',	enName: "elecConstruct", templateUrl: 'templates/main/product/construct/0.html', active: true},
			{name: '통신공사', enName: "commConstruct", templateUrl: 'templates/main/product/construct/1.html', active: false},
			{name: '소방공사', enName: "fireConstruct", templateUrl: 'templates/main/product/construct/2.html', active: false},
			{name: '신재생에너지', enName: "greenConstruct", templateUrl: 'templates/main/product/construct/3.html', active: false},
			{name: '기타', enName: "oterConstruct", templateUrl: 'templates/main/product/construct/4.html', active: false}
		];

		// Pull data from server
		// ALL DATA MUST FORMATTED AS JSON
		$pConstruct.getCableData = function(currentPage) {
			// set the rest API url
			var restAPIURL = "http://127.0.0.1:3000"+"";
			$http.get(restAPIURL).then(function(data){
				if(currentPage === "elecConstruct") 						{ $pConstruct.elecConstruct 	= data; }
				else if (currentPage === "commConstruct") 			{ $pConstruct.commConstruct 	= data; }
				else if (currentPage === "fireConstruct") 			{ $pConstruct.fireConstruct 	= data; }
				else if (currentPage === "greenConstruct")			{ $pConstruct.greenConstruct 	= data; }
				else if (currentPage === "oterConstruct") 			{ $pConstruct.oterConstruct 	= data; }
			}, function(err){
				console.log(err);
			});
		};

		// clear all active class
		$pConstruct.clearActive = function () {
			for(var i=0; i<$pConstruct.routeConfig.length; i++){
				$pConstruct.routeConfig[i].active = false;
			}
		}

		// SubMenu Click
		$pConstruct.toSubMenu = function (index){
			$pConstruct.clearActive();
			$pConstruct.routeConfig[index].active 	= true;
			$pConstruct.subSubMenuOn								= false;
			$pConstruct.selectedItem 								= null;
			$pConstruct.currentPageUrl 							= $pConstruct.routeConfig[index].templateUrl;
			$pConstruct.currentPage 								= $pConstruct.routeConfig[index].enName;

			/*
			// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
			$pConstruct.getCableData($pConstruct.currentPage);
			*/
		}

		// Item Select
		$pConstruct.selectProduct = function (item) {
			$pConstruct.subSubMenuOn = true;
			$pConstruct.selectedItem = item;
		};


		/*
			THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
				$pConstruct.elecConstruct
				$pConstruct.elecConstructList
				$pConstruct.commConstruct
				$pConstruct.commConstructList
				$pConstruct.fireConstruct
				$pConstruct.fireConstructList
				$pConstruct.greenConstruct
				$pConstruct.greenConstructList
				$pConstruct.otherConstuct
				$pConstruct.otherConstuctList
		*/
		$pConstruct.elecConstruct = [
			{
				prodID: "101",
				categoy: "통신설비",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: null,
				shelter: null,
				fireDemandWater: null,
				extinguishActive: null,
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/0/Picture2.png"
			}
		];
		$pConstruct.elecConstructList = [
			'수변전설비공사',
			'내선공사',
			'외선공사',
			'동력공사',
			'송전공사',
			'변전공사',
			'심야전력공사',
			'신호, 가로등 공사',
			'기타전기설비공사',
			'신재생에너지'
		];

		$pConstruct.commConstruct = [
			{
				prodID: "201",
				categoy: "통신설비",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: null,
				shelter: null,
				fireDemandWater: null,
				extinguishActive: null,
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/1/Picture2.png"
			},
			{
				prodID: "202",
				categoy: "방송설비",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: null,
				shelter: null,
				fireDemandWater: null,
				extinguishActive: null,
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/1/Picture3.png"
			},
			{
				prodID: "203",
				categoy: "광케이블 설비",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: null,
				shelter: null,
				fireDemandWater: null,
				extinguishActive: null,
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/1/Picture4.png"
			},
			{
				prodID: "204",
				categoy: "CCTV 설비",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: null,
				shelter: null,
				fireDemandWater: null,
				extinguishActive: null,
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/1/Picture5.png"
			}
		];
		$pConstruct.commConstructList = [
			'통신선로설비공사',
			'정보망설비공사',
			'철도통신신호설비공사',
			'방송설비공사',
			'구내통신공사',
			'기타통신설비공사'
		];

		$pConstruct.fireConstruct = [
			{
				prodID: "301",
				categoy: "소방공사",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: '화재발생 사실을 통보하는 기계/기구 또는 설비',
				shelter: '화재가 발생할 경우 피난하기 위하여 사용하는 기구 또는 설비',
				fireDemandWater: '화재를 진압하는데 필요한 물을 공급하거나 저장하는 설비',
				extinguishActive: '화재를 진압하거나 인명구조활동을 위하여 사용하는 설비',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/2/Picture2.png"
			},
			{
				prodID: "302",
				categoy: "소방설계",
				extinguishment: '옥내/외 소화 설비, 스프링쿨러 설비, 포소화 설비 등',
				alarm: '비상 경보/방송 설비, 누전 및 시간 경보기 설비, 자동 화재 속보 설비 등',
				shelter: '피난기구, 인명구조기구, 비상조명등, 유도표지 등',
				fireDemandWater: null,
				extinguishActive: '제연 설비, 연결 송수관/살수설비 등',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/2/Picture3.png"
			},
			{
				prodID: "303",
				categoy: "방면공사",
				extinguishment: null,
				alarm: null,
				shelter: null,
				fireDemandWater: null,
				extinguishActive: null,
				desc: '아파트를 제외한 11층 이상의 건물외 휴게음식점 또는 일반음식점, 단란주점, 또는 유흥주점, 음반/비디오물 및 게임물에 관한 시청제공업(비디오물 감상실업에 한함), 게임제공업 또는 노래연습장, 안마시술소, 헬스클럽장, 특수 목욕장(사우나, 찜질방), 관람집회 및 운동시설(건출물의 옥내에 있는것에 한하되 수영장은 제외함) 일반숙박시설, 관광숙박시설, 종합병원, 방송국, 촬영소, 전시장, 고시원, 노유자시설 및 숙박시설이 있는 청년시설을 대상으로 방염 서비스를 제공합니다.',
				descSrc: null,
				imgSrc: "images/product/construct/2/Picture4.png"
			},
		];
		$pConstruct.fireConstructList = null;

		$pConstruct.greenConstruct = [
			{
				prodID: "401",
				categoy: "풍력발전시스템 공사",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: '화재발생 사실을 통보하는 기계/기구 또는 설비',
				shelter: '화재가 발생할 경우 피난하기 위하여 사용하는 기구 또는 설비',
				fireDemandWater: '화재를 진압하는데 필요한 물을 공급하거나 저장하는 설비',
				extinguishActive: '화재를 진압하거나 인명구조활동을 위하여 사용하는 설비',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/3/Picture2.png"
			},
			{
				prodID: "402",
				categoy: "태양광발전시스템 공사",
				extinguishment: '옥내/외 소화 설비, 스프링쿨러 설비, 포소화 설비 등',
				alarm: '비상 경보/방송 설비, 누전 및 시간 경보기 설비, 자동 화재 속보 설비 등',
				shelter: '피난기구, 인명구조기구, 비상조명등, 유도표지 등',
				fireDemandWater: null,
				extinguishActive: '제연 설비, 연결 송수관/살수설비 등',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/3/Picture3.png"
			},
		];
		$pConstruct.greenConstructList = null;

		$pConstruct.oterConstruct = [
			{
				prodID: "501",
				categoy: "풍력발전시스템 공사",
				extinguishment: '물 그 밖의 소화약제를 사용하여 소화하는 기계/기구 또는 설비',
				alarm: '화재발생 사실을 통보하는 기계/기구 또는 설비',
				shelter: '화재가 발생할 경우 피난하기 위하여 사용하는 기구 또는 설비',
				fireDemandWater: '화재를 진압하는데 필요한 물을 공급하거나 저장하는 설비',
				extinguishActive: '화재를 진압하거나 인명구조활동을 위하여 사용하는 설비',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/4/Picture2.png"
			},
			{
				prodID: "502",
				categoy: "태양광발전시스템 공사",
				extinguishment: '옥내/외 소화 설비, 스프링쿨러 설비, 포소화 설비 등',
				alarm: '비상 경보/방송 설비, 누전 및 시간 경보기 설비, 자동 화재 속보 설비 등',
				shelter: '피난기구, 인명구조기구, 비상조명등, 유도표지 등',
				fireDemandWater: null,
				extinguishActive: '제연 설비, 연결 송수관/살수설비 등',
				desc: null,
				descSrc: null,
				imgSrc: "images/product/construct/4/Picture3.png"
			},
		];
		$pConstruct.oterConstructList = null;


		$pConstruct.subSubMenuOn = false;
		$pConstruct.selectedItem = null;

		// initial page to load
		$pConstruct.currentPageUrl = $pConstruct.routeConfig[0].templateUrl;
		$pConstruct.currentPage = $pConstruct.routeConfig[0].enName;
		/*
		// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pConstruct.getCableData($pConstruct.currentPage);
		*/


}]);
