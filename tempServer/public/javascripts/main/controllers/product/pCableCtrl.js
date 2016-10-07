var h3Framework = angular.module('h3Framework')

.controller('pCableCtrl', ['$http', function ($http) {
	var $pCable = this;

	// cable menu config
	$pCable.routeConfig = [
		{name: '전력케이블', enName: "powerCable", templateUrl: 'templates/main/product/cable/0.html', active: true},
		{name: '전연케이블', enName: "insulatedWire", templateUrl: 'templates/main/product/cable/0.html', active: false},
		{name: '제어용케이블', enName: "controlCable", templateUrl: 'templates/main/product/cable/0.html', active: false},
		{name: '통신케이블', enName: "communicationCable", templateUrl: 'templates/main/product/cable/0.html', active: false},
		{name: '소방케이블', enName: "fireCable", templateUrl: 'templates/main/product/cable/0.html', active: false},
		// {name: '기타', enName: "oterCable", templateUrl: 'templates/main/product/cable/5.html', active: false}
	];

	// Pull data from server
	// ALL DATA MUST FORMATTED AS JSON
	$pCable.getCableData = function(currentPage) {
		// set the rest API url
		var restAPIURL = "http://127.0.0.1:3000"+"";
		$http.get(restAPIURL).then(function(data){
			$pCable.dataSet = data;
		}, function(err){
			console.log(err);
		});
	};

	// clear all active class
	$pCable.clearActive = function () {
		for(var i=0; i<$pCable.routeConfig.length; i++){
			$pCable.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$pCable.toSubMenu = function (index){
		$pCable.clearActive();
		$pCable.routeConfig[index].active 	= true;
		$pCable.subSubMenuOn								= false;
		$pCable.selectedItem 								= null;
		$pCable.currentPageUrl 							= $pCable.routeConfig[index].templateUrl;
		$pCable.currentPage 								= $pCable.routeConfig[index].enName;

		/*
		// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
		$pCable.getCableData($pCable.currentPage);
		*/
		if($pCable.routeConfig[index].enName === "powerCable"){
			$pCable.dataSet = $pCable.powerCable;
		} else if($pCable.routeConfig[index].enName === "insulatedWire"){
			$pCable.dataSet = $pCable.insulatedWire;
		} else if($pCable.routeConfig[index].enName === "controlCable"){
			$pCable.dataSet = $pCable.controlCable;
		} else if($pCable.routeConfig[index].enName === "communicationCable"){
			$pCable.dataSet = $pCable.communicationCable;
		} else if($pCable.routeConfig[index].enName === "fireCable"){
			$pCable.dataSet = $pCable.fireCable;
		}
	}

	// Item Select
	$pCable.selectProduct = function (item) {
		$pCable.subSubMenuOn = true;
		$pCable.selectedItem = item;
	};


	/*
		THE FOLLOWING VARIABLES CAN BE DELTED ONCE REST API SERVER IS SETUP
			$pCable.powerCable
			$pCable.insulatedWire
			$pCable.controlCable
			$pCable.communicationCable
			$pCable.fireCable
	*/
	$pCable.powerCable = {
		title: "Power Cable",
		header: {
			strongTxt: "신기의 다양한 산업 특성에 맞는 전력케이블을 제공합니다.",
			defaultTxt: "전력용 케이블은 도체 위에 비닐, 폴리에틸렌, 가교폴리에틸렌 등의 절연재료로 원형의 압출물로 성형하여 제작된 송배전용 케이블을 말합니다. 0.6/1kV부터 22.9kV까지의 일반 전력용 배전 케이블을 공급하고 있으며, 우수한 내열 성능과 기능에 따라 난연, 내화성능을 강화한 친환경 케이블을 생산/공급하고 있습니다.",
			imgSrc: ["images/product/cable/0/Picture1.png", "images/product/cable/0/Picture2.png"],
		},
		data: [
			{
				prodID: "101",
				name: "0.6 / 1KV F-CV",
				desc: ["0.6 / 1kV 가교 폴리에틸렌 절연 난연 PVC 시스 트레이용 케이블"],
				usage: ['주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 전력용 케이블', '전기설비 기술 기준령에 준한 트레이용 난연 케이블 '],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",													// 도체
					internalFire: "",								// 내화층
					internal: null,																			// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],			// 절연체
					external: null,																			// 외부 반도전
					neutralConductor: null,															// 중성선
					daeyeon: "",											// 대연
					shielding: null,																		// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",			// 연합
					sheath: "흑색 난연 비닐(FR-PVC)"											// 시스
				},
				color: ["1심 : 자연색(XPLE)", "2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹"],
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: `
				<h1>0.6 / 1kV F-CV - 단심</h1>
				<table class="table table-bordered">
					<thead>
					  <tr>
					    <th colspan="3">도체</th>
					    <th rowspan="2">절연 두께</th>
					    <th rowspan="2">시스 두께</th>
					    <th rowspan="2">완성품 외경</th>
					    <th rowspan="2">도체 저항 20℃</th>
					    <th rowspan="2">시험 전압</th>
					    <th rowspan="2">개산 무게</th>
					  </tr>
					  <tr>
					    <th>공칭 단면적</th>
					    <th>소선수/소선지름</th>
					    <th>외경</th>
					  </tr>
					  <tr>
					    <th>mm2</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>Ω/㎞</th>
					    <th>V</th>
					    <th>(kg/km)</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
					    <td>1.5</td>
					    <td>7/0.53</td>
					    <td>1.59</td>
					    <td>0.7</td>
					    <td>1.4</td>
					    <td>6.3</td>
					    <td>12.1</td>
					    <td>3,500</td>
					    <td>53</td>
					  </tr>
						<tr>
					    <td>2.5</td>
					    <td>7/0.67</td>
					    <td>2.01</td>
					    <td>0.7</td>
					    <td>1.4</td>
					    <td>6.7</td>
					    <td>7.41</td>
					    <td>3,500</td>
					    <td>65</td>
					  </tr>
						<tr>
					    <td>4</td>
					    <td>7/0.85</td>
					    <td>2.55</td>
							<td>0.7</td>
					    <td>1.4</td>
					    <td>7.2</td>
					    <td>4.61</td>
							<td>3,500</td>
					    <td>81</td>
					  </tr>
						<tr>
					    <td>6</td>
					    <td>7/1.04</td>
					    <td>3.12</td>
					    <td>0.7</td>
					    <td>1.4</td>
					    <td>7.8</td>
					    <td>3.08</td>
							<td>3,500</td>
					    <td>108</td>
					  </tr>
						<tr>
					    <td>10</td>
					    <td>7/1.35</td>
					    <td>4.05</td>
					    <td>0.7</td>
					    <td>1.4</td>
					    <td>9.4</td>
					    <td>1.83</td>
							<td>3,500</td>
					    <td>155</td>
					  </tr>
						<tr>
					    <td>16</td>
							<td>원형압축</td>
					    <td>4.7</td>
					    <td>0.7</td>
					    <td>1.4</td>
					    <td>10</td>
					    <td>1.15</td>
							<td>3,500</td>
					    <td>210</td>
					  </tr>
						<tr>
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>0.9</td>
					    <td>1.4</td>
					    <td>12</td>
					    <td>0.727</td>
							<td>3,500</td>
					    <td>315</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>0.9</td>
					    <td>1.4</td>
					    <td>13</td>
					    <td>0.524</td>
							<td>3,500</td>
					    <td>414</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>1</td>
					    <td>1.4</td>
					    <td>14.5</td>
					    <td>0.387</td>
							<td>3,500</td>
					    <td>542</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>1.1</td>
					    <td>1.4</td>
					    <td>16</td>
					    <td>0.268</td>
							<td>3,500</td>
					    <td>761</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>1.1</td>
					    <td>1.5</td>
					    <td>18.5</td>
					    <td>0.193</td>
							<td>3,500</td>
					    <td>1,026</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>1.2</td>
					    <td>1.5</td>
					    <td>20</td>
					    <td>0.153</td>
							<td>3,500</td>
					    <td>1,279</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>1.4</td>
					    <td>1.6</td>
					    <td>22</td>
					    <td>0.124</td>
							<td>3,500</td>
					    <td>1,524</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>1.6</td>
					    <td>1.6</td>
					    <td>24</td>
					    <td>0.0991</td>
							<td>3,500</td>
					    <td>1,872</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>20.5</td>
					    <td>1.7</td>
					    <td>1.7</td>
					    <td>27</td>
					    <td>0.0754</td>
							<td>3,500</td>
					    <td>2,391</td>
					  </tr>
						<tr>
					    <td>300</td>
					    <td>원형압축</td>
					    <td>20.5</td>
					    <td>1.8</td>
					    <td>1.8</td>
					    <td>30</td>
					    <td>0.0601</td>
							<td>3,500</td>
					    <td>3,023</td>
					  </tr>
						<tr>
					    <td>400</td>
					    <td>원형압축</td>
					    <td>23.2</td>
					    <td>2</td>
					    <td>1.9</td>
					    <td>34</td>
					    <td>0.047</td>
							<td>3,500</td>
					    <td>3,975</td>
					  </tr>
						<tr>
					    <td>500</td>
					    <td>원형압축</td>
					    <td>26.4</td>
					    <td>2.2</td>
					    <td>2</td>
					    <td>37</td>
					    <td>0.03666</td>
							<td>3,500</td>
					    <td>4,894</td>
					  </tr>
						<tr>
					    <td>630</td>
					    <td>원형압축</td>
					    <td>30.2</td>
					    <td>2.4</td>
					    <td>2.2</td>
					    <td>42</td>
					    <td>0.0283</td>
							<td>3,500</td>
					    <td>6,283</td>
					  </tr>
					</tbody>
				</table>

				<h1>0.6 / 1kV F-CV - 2심</h1>
				<table class="table table-bordered">
					<thead>
					  <tr>
					    <th colspan="3">도체</th>
					    <th rowspan="2">절연 두께</th>
					    <th rowspan="2">시스 두께</th>
					    <th rowspan="2">완성품 외경</th>
					    <th rowspan="2">도체 저항 20℃</th>
					    <th rowspan="2">시험 전압</th>
					    <th rowspan="2">개산 무게</th>
					  </tr>
					  <tr>
					    <th>공칭 단면적</th>
					    <th>소선수/소선지름</th>
					    <th>외경</th>
					  </tr>
					  <tr>
					    <th>mm2</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>mm</th>
					    <th>Ω/㎞</th>
					    <th>V</th>
					    <th>(kg/km)</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
					    <td>1.5</td>
					    <td>7/0.53</td>
					    <td>1.59</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>11</td>
					    <td>12.1</td>
					    <td>3,500</td>
					    <td>127</td>
					  </tr>
						<tr>
					    <td>2.5</td>
					    <td>7/0.67</td>
					    <td>2.01</td>
					    <td>0.7</td>
					    <td>1.18</td>
					    <td>12</td>
					    <td>7.41</td>
					    <td>3,500</td>
					    <td>153</td>
					  </tr>
						<tr>
					    <td>4</td>
					    <td>7/0.85</td>
					    <td>2.55</td>
							<td>0.7</td>
					    <td>1.8</td>
					    <td>13</td>
					    <td>4.61</td>
							<td>3,500</td>
					    <td>197</td>
					  </tr>
						<tr>
					    <td>6</td>
					    <td>7/1.04</td>
					    <td>3.12</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>14</td>
					    <td>3.08</td>
							<td>3,500</td>
					    <td>252</td>
					  </tr>
						<tr>
					    <td>10</td>
					    <td>7/1.35</td>
					    <td>4.05</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>17</td>
					    <td>1.83</td>
							<td>3,500</td>
					    <td>357</td>
					  </tr>
						<tr>
					    <td>16</td>
							<td>원형압축</td>
					    <td>4.7</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>18.5</td>
					    <td>1.15</td>
							<td>3,500</td>
					    <td>487</td>
					  </tr>
						<tr>
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>22</td>
					    <td>0.727</td>
							<td>3,500</td>
					    <td>720</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>24</td>
					    <td>0.524</td>
							<td>3,500</td>
					    <td>943</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>1</td>
					    <td>1.8</td>
					    <td>27</td>
					    <td>0.387</td>
							<td>3,500</td>
					    <td>1,229</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>1.1</td>
					    <td>1.8</td>
					    <td>31</td>
					    <td>0.268</td>
							<td>3,500</td>
					    <td>1,702</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>1.1</td>
					    <td>1.9</td>
					    <td>35</td>
					    <td>0.193</td>
							<td>3,500</td>
					    <td>2,285</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>1.2</td>
					    <td>2</td>
					    <td>38</td>
					    <td>0.153</td>
							<td>3,500</td>
					    <td>2,890</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>1.4</td>
					    <td>2.2</td>
					    <td>43</td>
					    <td>0.124</td>
							<td>3,500</td>
					    <td>3,475</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>1.6</td>
					    <td>2.3</td>
					    <td>47</td>
					    <td>0.0991</td>
							<td>3,500</td>
					    <td>4,282</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>20.5</td>
					    <td>1.8</td>
					    <td>2.6</td>
					    <td>53</td>
					    <td>0.0754</td>
							<td>3,500</td>
					    <td>5,469</td>
					  </tr>
						<tr>
					    <td>300</td>
					    <td>원형압축</td>
					    <td>20.5</td>
					    <td>1.8</td>
					    <td>2.6</td>
					    <td>58</td>
					    <td>0.0601</td>
							<td>3,500</td>
					    <td>6,876</td>
					  </tr>
					</tbody>
				</table>
				`,
				imgSrc: "images/product/cable/0/Picture1.png"
			},
			{
				prodID: "102",
				name: "0.6 / 1kV HFCO",
				desc: ["0.6 / 1kV 가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 트레이용 케이블 "],
				usage: ['주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 전력용 케이블', '전기설비 기술 기준령에 준한 트레이용 난연 케이블'],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀"											// 시스
				},
				color: ["1심 : 자연색(XPLE)", "2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹"],
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: true,		//한국 산업 규격
					em: true, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/0/Picture2.png"
			},
			{
				prodID: "103",
				name: "6 / 10kV F-CV",
				desc: ["6 / 10kV 가교 폴리에틸렌 절연 난연 PVC 시스 트레이용 케이블"],
				usage: ['주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 전력용 케이블', '전기설비 기술 기준령에 준한 트레이용 난연 케이블'],
				std: [
					{stdName: "KS C IEC 60502-2", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제2부 : 케이블 (6kV 및 30kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "반도전 압출층",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체
					external: "반도전 압출층",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "외부 반도전 층의 위에 동 테이프를 감음",									// 차폐
					alliance: "3심 케이블 일 때는 차폐된 선심 3가닥을 원형으로 꼬음",										// 연합
					sheath: "흑색 난연 비닐(FR-PVC)"											// 시스
				},
				color: ["3심 : 흑, 백, 적"],
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/0/Picture3.png"
			},
			{
				prodID: "104",
				name: "6 / 10kV HFCO",
				desc: ["6 / 10kV 가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 트레이용 케이블"],
				usage: ['주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 전력용 케이블', '전기설비 기술 기준령에 준한 트레이용 난연 케이블', '다중 이용시설에 적합한 저독성 고난연 케이블'],
				std: [
					{stdName: "KS C IEC 60502-2", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제2부 : 케이블 (6kV 및 30kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(원형압축연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "반도전 압출층",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체
					external: "반도전 압출층",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "외부 반도전 층의 위에 동 테이프를 감음",									// 차폐
					alliance: "3심 케이블 일 때는 차폐된 선심 3가닥을 원형으로 꼬음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀"											// 시스
				},
				color: ["3심 : 흑, 백, 적"],
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: true,		//한국 산업 규격
					em: true, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/0/Picture4.png"
			},
			{
				prodID: "105",
				name: "22.9kV CN / CV-W, 22.9kV TR-CN / CV-W",
				desc: ["22.9kV 수밀형 동심 중성선 케이블(CN/CV-W)", "22.9kV 수밀형 트리억제형 동심 중성선 케이블(TR-CN/CV-W)"],
				usage: ["산업 및 상업적 용동의 다중 접지 전력 및 배전 회로에 사용하는 전력용 케이블"],
				std: [
					{stdName: "한전 규격",desc: null},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "수밀형 2등급(원형압축연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "반도전 압출층",										// 내부 반도전
					insulation: ["(1) CN/CV-W 가교 폴리에틸렌(XLPE)", "(2) TR-CN/CV-W 트리억제형 가교폴리에틸렌(TR-XLPE)"],								// 절연체
					external: "반도전 압출층",										// 외부 반도전
					neutralConductor: "외부 반도전층의 위에 연동선으로 동심으로 감고, 연동선 상/하에는 수밀형 부풀음 테이프를 감음",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: "흑색의 비닐(PVC)"											// 시스
				},
				color: null,
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/0/Picture5.png"
			},
			{
				prodID: "106",
				name: "22.9kV FR-CN/CO-W",
				desc: ["22.9kV 수밀형 저독성 난연 동심 중성선 케이블"],
				usage: ["산업 및 상업적 용동의 다중 접지 전력 및 배전 회로에 사용하는 전력용 케이블"],
				std: [
					{stdName: "한전 규격", desc: null},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "수밀형 2등급(원형압축연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "반도전 압출층",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체
					external: "반도전 압출층",										// 외부 반도전
					neutralConductor: "외부 반도전층의 위에 연동선으로 동심으로 감고, 연동선 상/하에는 수밀형 부풀음 테이프를 감음",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: "흑색의 저독성 난연 폴리올레핀"											// 시스
				},
				color: null,
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/0/Picture6.png"
			},
		]
	};

	$pCable.insulatedWire = {
		title: "Insulated Wire",
		header: {
			strongTxt: "신기의 다양한 산업 특성에 맞는 전연케이블을 제공합니다.",
			defaultTxt: "절연전선이란 750V 이하 옥내외 배선에 사용되는 전선으로 도체 위에 PVC 또는 XLPE로 절연한 전선입니다. 저압으로 단선 또는 연선에 절연물을 피복한 것으로 종류로는 IV, DV, GV, OW등이 있습니다.",
			imgSrc: ["images/product/cable/1/Picture1.png", "images/product/cable/1/Picture2.png"],
		},
		data: [
			{
				prodID: "201",
				name: "AS (Annealed Copper Stranded Wire)",
				desc: ["전기용 연동 연선"],
				usage: ["전기용 도체"],
				std: [
					{stdName: "KS C 3103",desc: ["전기용 연동 연선"]},
					{stdName: "KS C IEC 60228",desc: ["절연케이블용 도체"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: null,
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/1/Picture3.png"
			},
			{
				prodID: "202",
				name: "300 / 500V KS IEC 60227 07(HIV)",
				desc: ["300 / 500V 기기배선용 내열 비닐 절연 전선"],
				usage: ["옥내에 사용되는 전기 시설물이나 전기 기기의 배선에 사용되는 도체 최고 허용온도 온도 90℃의 내열 비닐 절연 전선"],
				std: [
					{stdName: "KS C IEC 60227-3",desc: ["300/500V 내열 비닐 절연 전선"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "1등급(단선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["내열(HEAT-RESISTANT), 내흡습성(MOISTURE-RESISTANT), 무연(LEAD-FREE) PVC, 내열온도 90 ℃"],								// 절연체
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: ["표준 색상은 흑, 백, 적, 녹, 황, 청"],
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: true,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/1/Picture4.png"
			},
			{
				prodID: "203",
				name: "0.6 / 1kV F-GV",
				desc: ["0.6 / 1kV 트레이용 난연 PVC 절연 접지용 전선"],
				usage: ["접지용 난연 PVC 절연 전선", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1",desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["난연(FLAME-RETARDANT) PVC, 내열 온도 70 ℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: ["녹색"],	// Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/1/Picture5.png"
			},
			{
				prodID: "204",
				name: "450/750V HFIX",
				desc: ["450/750V 저독성 난연 가교 폴리올레핀 절연전선"],
				usage: ["옥내에 사용되는 전기 시설물이나 전기 기기의 배선에 사용되는 도체 최고 허용온도 온도 90℃의 저독성 가교 폴리올레핀 절연 전선"],
				std: [
					{stdName: "KS C 3341", desc: null},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "1등급(단선) 또는 2등급(연선)의 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["저독성(HALOGEN FREE), 가교폴리올레핀(XLPO), 내열온도 90 ℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: ["표준 색상은 흑, 백, 적, 녹, 황, 청"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: true,		//한국 산업 규격
					em: true, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/1/Picture6.png"
			},
		]
	};

	$pCable.controlCable = {
		title: "Power Cable",
		header: {
			strongTxt: "신기의 다양한 산업 특성에 맞는 제어용케이블을 제공합니다.",
			defaultTxt: "제어용 케이블은 각종 산업, 건축, 보안시설에서 기기간 제어신호를 전달하는 케이블입니다. 케이블 용도에 따라 절연, 시스재료, 차폐, 외장 및 규격 등을 고려해 사용되며, 발전소, 변전소, 공장 등에서 기기의 원격조작 및 자동제어용으로 사용되고 있습니다.",
			imgSrc: ["images/product/cable/2/Picture1.png", "images/product/cable/2/Picture2.png"],
		},
		data: [
			{
				prodID: "301",
				name: "0.6 / 1kV F-CVV",
				desc: ["0.6 / 1kV 비닐 절연 난연 비닐 시스 트레이용 제어 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["비닐(PVC), 내열 온도 70℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 난연 비닐(FR-PVC)"											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture3.png"
			},
			{
				prodID: "302",
				name: "0.6 / 1kV F-CVV-S",
				desc: ["0.6 / 1kV 비닐 전연 난연 비닐 시스 트레이용 제어 차폐 케이블(동 테이프 차폐)"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 동 테이프 차폐 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["비닐(PVC), 내열 온도 70℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 난연 비닐(FR-PVC)"											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture4.png"
			},
			{
				prodID: "303",
				name: "0.6 / 1kV F-CVV-SB",
				desc: ["0.6 / 1kV 비닐 전연 난연 비닐 시스 트레이용 제어 차폐 케이블(동 편조 차폐)"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 동 편조 차폐된 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["비닐(PVC), 내열 온도 70℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 난연 비닐(FR-PVC) "											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture5.png"
			},
			{
				prodID: "304",
				name: "0.6 / 1kV F-CVV-AMS, 0.6 / 1kV F-CVV-I / CAMS",
				desc: ["0.6 / 1kV 비닐 절연 난연 시스 알루미늄 마일라 테이프 공동차폐/각대, 공동차폐 트레이용 제어 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 알루미늄 마일라 테이프 차폐된 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["비닐(PVC), 내열 온도 70℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "2가닥(페어) 또는 3가닥(트라이어드)의 선심을 꼬음",											// 대연
					shielding: ["각대 차폐 – 페어 또는 트라이어드를 알루미늄 마일라 테이 프로 차폐", "공동 차폐 – 선심 연합된 위에 알루미늄 마일라 테이프로 차폐", "차폐시에는 드래인 와이어(DRAIN WIRE)를 삽입"],									// 차폐
					alliance: "절연된 선심(코아 형태) 또는 차폐된 페어, 트라이어드를 원형으로 꼬음",										// 연합
					sheath: "흑색 난연 비닐(FR-PVC)"											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture6.png"
			},
			{
				prodID: "305",
				name: "0.6 / 1kV HFCCO",
				desc: ["0.6 / 1kV 가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 제어용 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀"											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: true, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture7.png"
			},
			{
				prodID: "306",
				name: "0.6 / 1kV HFCCO-S",
				desc: ["0.6 / 1kV 가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 동 테이프 차폐 제어용"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 동 테이프 차폐된 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: ["동 테이프"],									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀"											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture8.png"
			},
			{
				prodID: "307",
				name: "0.6 / 1kV HFCCO-SB",
				desc: ["0.6 / 1kV 가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 동 편조 차폐 제어용 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 동 편조 차폐된 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: ["동 편조"],									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀"											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture9.png"
			},
			{
				prodID: "308",
				name: "0.6 / 1kV HFCCO-AMS, 0.6 / 1kV HFCCO-I/CAMS",
				desc: ["0.6 / 1kV 가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 알루미늄 마일라 테이프 공동차폐/각대, 공동차폐 제어용 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 제어 회로에 사용하는 알루미늄 마일라 테이프 차폐된 제어용 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XLPE), 내열 온도 90℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "2가닥(페어) 또는 3가닥(트라이어드)의 선심을 꼬음",											// 대연
					shielding: ["각대 차폐 – 페어 또는 트라이어드를 알루미늄 마일라 테이 프로 차폐", "공동 차폐 – 선심 연합된 위에 알루미늄 마일라 테이프로 차폐", "차폐시에는 드래인 와이어(DRAIN WIRE)를 삽입"],									// 차폐
					alliance: "절연된 선심(코아 형태) 또는 차폐된 페어, 트라이어드를 원형으로 꼬음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀 "											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상 : 번호 표시"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/2/Picture10.png"
			},
		]
	};

	$pCable.communicationCable = {
		title: "Communication Cable",
		header: {
			strongTxt: "신기의 다양한 산업 특성에 맞는 통신케이블을 제공합니다.",
			defaultTxt: "내부도체에 동선, 절연체에 (고)발포 폴리에틸렌, 외부도체에 알루미늄 라미네이트 플라스틱 테이브와 주석 도금 연동선 편조를 사용하고, 외부 도체 상에 비닐을 피복한 손실이 매우 적으며 차폐 특성이 뛰어난 케이블입니다. 차폐를 3중으로 실시하여 광대역(5.75 ~ 750)에서 사용 가능하고 종합 유선방송 기자재 형식승인을 취득하였습니다.",
			imgSrc: ["images/product/cable/0/Picture3.png", "images/product/cable/3/Picture2.png"],
		},
		data: [
			{
				prodID: "401",
				name: "HFBT/FBT",
				desc: ["고발포 3중차페 저손실 동축"],
				usage: ["정배파비가 양호하고, 광대역에서 사용 가능함으로 유선방송국에서 가입자까지 영상신호 전송시스템에 사용"],
				std: "",
				desc2: "",	// 제품설명
				materials: {
					conductor: "",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: "",	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/3/Picture3.png"
			},
			{
				prodID: "402",
				name: "CPEV",
				desc: ["폴리에틸렌절연 비닐쉬스 시내 쌍 케이블"],
				usage: ["폴리에틸렌절연 비닐쉬스 시내 쌍 케이블은 비교적 단거리 통신용으로 사용하는 폴리에틸렌(PE)을 절연체로 하고, 염화비닐수지를 주체로 한 혼합물을 쉬스로 하는 케이블입니다."],
				std: [
					{stdName: "KS C 3603", desc: null},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: "",	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/3/Picture4.png"
			},
			{
				prodID: "403",
				name: "EXC",
				desc: ["고주파 동축 케이블"],
				usage: ["폴리에틸렌절연 비닐쉬스 시내 쌍 케이블은 비교적 단거리 통신용으로 사용하는 폴리에틸렌(PE)을 절연체로 하고, 염화비닐수지를 주체로 한 혼합물을 쉬스로 하는 케이블입니다."],
				std: "",
				desc2: "",	// 제품설명
				materials: {
					conductor: "",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: "",	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/3/Picture5.png"
			},
			{
				prodID: "404",
				name: "UTP CAT.7",
				desc: ["UTP CAT.7"],
				usage: ["정배파비가 양호하고, 광대역에서 사용 가능함으로 유선방송국에서 가입자까지 영상신호 전송시스템에 사용"],
				std: [
					{stdName: "ISO/IEC 11801 및 IEC 61156-5 국제표준", desc: null},
				],
				desc2: ["Category 7 케이블은 국제 표준에 준하는 10Gbit의 고성능 전송이 가능합니다. ISO/IEC기준 Category 7  성능에 해당하며, Category 6, 6A 에 비하여 향상된 Crosstalk, Noise 간섭 방지하는 구조를 가지고 있습니다. PiMF  (Pair in Metal Foil) 구조를 통하여 각 Pair 단위로 차폐되어 있습니다. Alien Crosstalk로부터 안정적인 성능을 구현합  니다. 현재는 케이블 단위로만 공급되고 있으며, 고 난연 특성을 가지는 피복을 사용할 경우(LSZH) 화재 시 피해의  확산을  방지할  수  있습니다.  DNV  선급인증을  보유하고 있습니다."],	// 제품설명
				materials: {
					conductor: "",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: "",	//Array
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/3/Picture6.png"
			},
			{
				prodID: "405",
				name: "UTP CAT.6A",
				desc: ["UTP CAT.6A"],
				usage: ["Category 6A / Class EA의 고성능  및  광대역 전송"],
				std: [
					{stdName: "ISO/IEC 11801 및 ANSI/TIA", desc: null},
				],
				desc2: ["국제 표준에 준하는 10Gbit의 고성능 전송이 가능하며 장비실에서 인출구까지 ISO/IEC  11801 및 ANSI/TIA 등을 만족하는 모든 제품을 제공합니다. 케이블 Bundling시 인접 케이블간에 PSAACR-F 및  PSANEXT를 고려한 최적의 케이블 및 접속자재로 설계 하였으며 1~500MHz의 광대역 주파수까지 고속전송 지원  가능 합니다. 특히, 케이블의 경우 세계 최소 외경 설계를 통해 케이블링 밀집도를 극대화하여 비용 및 시간 효  율성  측면에서  최적의  솔루션  입니다.     또한, 커넥터의  경우  고객의  사용  편리성을  고려하여 Outlet, 장비실등에서 사용하는 접속자재는 고밀도 케이블링이 가능하도록 설계하였습니다. LS Simple™ 10G 솔루션은 데이터 센터 및 IBS건물 등 고성능을 요구하는 Cabling 최적화된 솔루션 입니다. 차  폐  및  비차폐  모두  지원  가능하며  모든  자재는  고  난연특성을  갖는  자재를  사용  하여  화재로  부터    안전합니다."],	// 제품설명
				materials: {
					conductor: "",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: "",	//Array
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/3/Picture7.png"
			},
			{
				prodID: "406",
				name: "UTP CAT.6",
				desc: ["UTP CAT.6"],
				usage: ["Category 6A 고성능  및  광대역 전송"],
				std: [
					{stdName: "ANSI/TIA-568-C.2, IEEE802.3 1000Base-T", desc: null},
				],
				desc2: ["Cat.6 솔루션은 국제 표준에 준하는 1.2Gbit의 고성능 전송이 가능하며 장비실에서 인출구까지ISO/IEC  11801 및 ANSI/TIA등을 만족하는 모든 제품을 제공합니다. 1~250MHz Category6/Class E 채널 규격 주파수의  지원으로 우수한 전송이 가능합니다. 특히, 케이블의 경우 최적의 외경 설계를 통해 케이블링 밀집도를 극대화  하여 비용 및 시간 효율성 측면에서 최적의 솔루션 입니다. 또한, 커넥터의 경우 고객의 사용 편리성을 고려하여  Outlet, 장비실 등에서 사용하는 접속자재는 고밀도 케이블링이 가능하도록 설계하였습니다. LS Simple™ Cat.6  솔루션은 데이터 센터 및 IBS건물 등 고성능을 요구하는 Cabling에 최적화된 솔루션입니다. 차폐 및 비차폐 모두  지원  가능하며  모든  자재는  고  난연특성을  갖는  자재를  사용하여  화재로  부터   안전합니다."],	// 제품설명
				materials: {
					conductor: "",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: "",	//Array
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/3/Picture8.png"
			},
			{
				prodID: "407",
				name: "UTP Enhanced CAT.5",
				desc: ["UTP Enhanced CAT.5"],
				usage: ["Category 5 Enhanced의 고성능  및  광대역 전송"],
				std: [
					{stdName: "ANSI/TIA 568C.2(or 568B), IEEE802.3 1000Base-T", desc: null},
				],
				desc2: ["Cat.5e 솔루션은 국제 표준에 준하는 ATM LAN 155Mbit/s의 고성능 전송이 가능하며 장비실에서 인  출구까지 ISO/IEC 11801 및 ANSI/TIA등을 모두 만족하는 제품을 제공합니다. 1~100MHz Category5e/Class D  채널 규격 주파수의 지원으로 우수한 전송이 가능합니다. 특히, 케이블의 경우 최적의 외경 설계를 통해 케이블  링 밀집도를 극대화하여 비용 및 시간 효율성 측면에서 최적의 솔루션 입니다. 또한, 커넥터의 경우 고객의 사용  편리성을 고려하여 Outlet, 장비실 등에서 사용하는 접속자재는 고밀도 케이블링이 가능하도록 설계하였습니다.  LS Simple™ Cat.5e 솔루션은 데이터 센터 및 IBS건물 등 고성능을 요구하는 Cabling에 최적화된 솔루션입니다.  차폐 및 비차폐 모두 지원 가능하며 모든 자재는 고 난연특성을 갖는 자재를 사용 하여 화재로 부터 안전합니다.  다양한  패널  디자인을  지원  함으로써  고객이  원하는  환경에  맞게  케이블링  가능  하게합니다."],	// 제품설명
				materials: {
					conductor: "",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "",										// 연합
					sheath: ""											// 시스
				},
				color: "",	//Array
				prdStd: {
					kc: false,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/3/Picture9.png"
			},
		]
	};

	$pCable.fireCable = {
		title: "Fire Retardant Cable",
		header: {
			strongTxt: "신기의 다양한 산업 특성에 맞는 소방케이블을 제공합니다.",
			defaultTxt: "소방용 케이블은 빌딩, 공장 등의 화재를 사전에 예방하고 피해를 최소화하기 위해 필요한 기능성 케이블입니다. 화재 감지기 및 경보장치의 배선, 각종 소방설비의 전원 공급선 등의 용도로 사용됩니다. 빌딩의 대형화, 공장 등 각종 산업시설의 고급화, 도시 및 시설의 지화화 추세에 따라 수요 및 중요성이 커지고 있습니다.",
			imgSrc: ["images/product/cable/4/Picture3.png", "images/product/cable/4/Picture2.png"],
		},
		data: [
			{
				prodID: "501",
				name: "0.6 / 1kV F-FR-8",
				desc: ["0.6 / 1kV 가교 폴리에틸렌 절연 난연 PVC 시스 트레이용 내화 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 전력용 내화 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "마이카 테이프",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 난연 비닐(FR-PVC)"											// 시스
				},
				color: ["1심 : 자연색(XPLE)", "2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/4/Picture3.png"
			},
			{
				prodID: "502",
				name: "0.6/1kV NFR-8",
				desc: ["0.6/1kV 가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 트레이용 난연 내화 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 전력용 저독성 내화 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "2등급(연선) 연동선",		// 도체
					internalFire: "마이카 테이프",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀"											// 시스
				},
				color: ["1심 : 자연색(XPLE)", "2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: true, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/4/Picture4.png"
			},
			{
				prodID: "503",
				name: "F-FR-3",
				desc: ["가교 폴리에틸렌 절연 난연 PVC 시스 화재 경보용 내열 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 화재경보용 내열 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "1등급(단선), 2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],										// 내부 반도전
					insulation: "",								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬은 후, 내열 테이프를 감음",										// 연합
					sheath: "흑색 난연 비닐(FR-PVC) "											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상은 번호표시 또는 연합 층별 흑, 적을 기준하며, 그 외 선심은 백색으로 함"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: false, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/4/Picture5.png"
			},
			{
				prodID: "504",
				name: "NFR-3",
				desc: ["가교 폴리에틸렌 절연 저독성 난연 폴리올레핀 시스 화재경보용 내열 케이블"],
				usage: ["주거 및 상업적 용도의 건물내 및 산업용 배전 회로에 사용하는 화재경보용 저독성 내열 케이블", "전기설비 기술 기준령에 준한 트레이용 난연 케이블"],
				std: [
					{stdName: "KS C IEC 60502-1", desc: ["정격 전압 1~30kV 압출성형", "절연 전력 케이블 및 그 부속품 – 제1부 : 케이블 (1kV 및 3kV)"]},
				],
				desc2: "",	// 제품설명
				materials: {
					conductor: "1등급(단선), 2등급(연선) 연동선",		// 도체
					internalFire: "",								// 내화층
					internal: "",										// 내부 반도전
					insulation: ["가교 폴리에틸렌(XPLE), 내열 온도 90℃"],								// 절연체 Array
					external: "",										// 외부 반도전
					neutralConductor: "",						// 중성선
					daeyeon: "",											// 대연
					shielding: "",									// 차폐
					alliance: "2심 이상인 경우 절연된 선심을 원형으로 꼬은 후, 내열 테이프를 감음",										// 연합
					sheath: "흑색 저독성 난연 폴리올레핀 "											// 시스
				},
				color: ["2심 : 흑, 백", "3심 : 흑, 백, 적", "4심 : 흑, 백, 적, 녹", "5심 이상은 번호표시 또는 연합 층별 흑, 적을 기준하며, 그 외 선심은 백색으로 함"],	//Array
				prdStd: {
					kc: true,		//전기용품 안전인증
					k: false,		//한국 산업 규격
					em: true, 	//환경표지 인증
				},
				descSrc: null,
				imgSrc: "images/product/cable/4/Picture6.png"
			},
		]
	};

	$pCable.otherCable = [
		{
			prodID: "601",
			name: "0.6/1KV (TFR-3, NFR-3)",
			desc: "0.6/1kV 트레이용 가교폴리에틸렌절연 난연 비닐시스 내열 케이블<br/>0.6/1kV 가교폴리에틸렌절연 저독성 난연 폴리올레핀 시스 내열 케이블  (0.6/1kV TFR-3, NFR-3)",
			usage: "옥내소화전, 스프링쿨러, 배연설비등 소방설비의 비상전원 및 조작회로에 사용. 전기설비기술 기준령에 의한 트레이용 난연케이블.",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/5/Picture3.png"
		},
		{
			prodID: "602",
			name: "0.6/1kV (TFR-8, NFR-8)",
			desc: "0.6/1kV 트레이용 가교폴리에틸렌절연 난연 비닐시스 내열 케이블<br/>0.6/1kV 가교폴리에틸렌절연 저독성 난연 폴리올레핀 시스 내열 케이블  (0.6/1kV TFR-3, NFR-3)",
			usage: "옥내소화전, 스프링쿨러, 배연설비등 소방설비의 비상전원 및 조작회로에 사용. 전기설비기술 기준령에 의한 트레이용 난연케이블.",
			std: "전기용품 안전인증",
			descSrc: null,
			imgSrc: "images/product/cable/5/Picture4.png"
		}
	];


	$pCable.subSubMenuOn = false;
	$pCable.selectedItem = null;

	// initial page to load
	$pCable.currentPageUrl = $pCable.routeConfig[0].templateUrl;
	$pCable.currentPage = $pCable.routeConfig[0].enName;

	// REMOVE THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pCable.dataSet = $pCable.powerCable;
	/*
	// UNCOMMENT THE FOLLOWING CODE IF REST API SERVER IS SETUP
	$pCable.getCableData($pCable.currentPage);
	*/



}]);
