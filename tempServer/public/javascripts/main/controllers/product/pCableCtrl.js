var h3Framework = angular.module('h3Framework')

.controller('pCableCtrl', ['$http', function ($http) {
	var $pCable = this;

	// cable menu config
	$pCable.routeConfig = [
		{name: '전력케이블', enName: "powerCable", templateUrl: 'templates/main/product/cable/0.html', active: true},
		{name: '전연케이블', enName: "insulatedWire", templateUrl: 'templates/main/product/cable/1.html', active: false},
		{name: '제어용케이블', enName: "controlCable", templateUrl: 'templates/main/product/cable/2.html', active: false},
		{name: '통신케이블', enName: "communicationCable", templateUrl: 'templates/main/product/cable/3.html', active: false},
		{name: '소방케이블', enName: "fireCable", templateUrl: 'templates/main/product/cable/4.html', active: false},
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
					    <td>18.3</td>
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
					    <td>18.3</td>
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

				<h1>0.6 / 1kV F-CV - 3심</h1>
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
					    <td>11.5</td>
					    <td>12.1</td>
					    <td>3,500</td>
					    <td>148</td>
					  </tr>
						<tr>
					    <td>2.5</td>
					    <td>7/0.67</td>
					    <td>2.01</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>12.5</td>
					    <td>7.41</td>
					    <td>3,500</td>
					    <td>189</td>
					  </tr>
						<tr>
					    <td>4</td>
					    <td>7/0.85</td>
					    <td>2.55</td>
							<td>0.7</td>
					    <td>1.8</td>
					    <td>13.5</td>
					    <td>4.61</td>
							<td>3,500</td>
					    <td>245</td>
					  </tr>
						<tr>
					    <td>6</td>
					    <td>7/1.04</td>
					    <td>3.12</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>14.5</td>
					    <td>3.08</td>
							<td>3,500</td>
					    <td>321</td>
					  </tr>
						<tr>
					    <td>10</td>
					    <td>7/1.35</td>
					    <td>4.05</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>18</td>
					    <td>1.83</td>
							<td>3,500</td>
					    <td>464</td>
					  </tr>
						<tr>
					    <td>16</td>
							<td>원형압축</td>
					    <td>4.7</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>19.5</td>
					    <td>1.15</td>
							<td>3,500</td>
					    <td>649</td>
					  </tr>
						<tr>
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>23</td>
					    <td>0.727</td>
							<td>3,500</td>
					    <td>975</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>25</td>
					    <td>0.524</td>
							<td>3,500</td>
					    <td>1,287</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>1</td>
					    <td>1.8</td>
					    <td>29</td>
					    <td>0.387</td>
							<td>3,500</td>
					    <td>1,693</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>1.1</td>
					    <td>1.9</td>
					    <td>33</td>
					    <td>0.268</td>
							<td>3,500</td>
					    <td>2,383</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>1.1</td>
					    <td>2</td>
					    <td>37</td>
					    <td>0.193</td>
							<td>3,500</td>
					    <td>3,224</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>1.2</td>
					    <td>2.1</td>
					    <td>41</td>
					    <td>0.153</td>
							<td>3,500</td>
					    <td>4,036</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>1.4</td>
					    <td>2.3</td>
					    <td>46</td>
					    <td>0.124</td>
							<td>3,500</td>
					    <td>4,840</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>1.6</td>
					    <td>2.4</td>
					    <td>50</td>
					    <td>0.0991</td>
							<td>3,500</td>
					    <td>5,975</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>1.7</td>
					    <td>2.6</td>
					    <td>57</td>
					    <td>0.0754</td>
							<td>3,500</td>
					    <td>7,641</td>
					  </tr>
						<tr>
					    <td>300</td>
					    <td>원형압축</td>
					    <td>20.5</td>
					    <td>1.8</td>
					    <td>2.7</td>
					    <td>62</td>
					    <td>0.0601</td>
							<td>3,500</td>
					    <td>9,638</td>
					  </tr>
					</tbody>
				</table>

				<h1>0.6 / 1kV F-CV - 4심</h1>
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
					    <td>12.5</td>
					    <td>12.1</td>
					    <td>3,500</td>
					    <td>179</td>
					  </tr>
						<tr>
					    <td>2.5</td>
					    <td>7/0.67</td>
					    <td>2.01</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>13.5</td>
					    <td>7.41</td>
					    <td>3,500</td>
					    <td>226</td>
					  </tr>
						<tr>
					    <td>4</td>
					    <td>7/0.85</td>
					    <td>2.55</td>
							<td>0.7</td>
					    <td>1.8</td>
					    <td>14.5</td>
					    <td>4.61</td>
							<td>3,500</td>
					    <td>305</td>
					  </tr>
						<tr>
					    <td>6</td>
					    <td>7/1.04</td>
					    <td>3.12</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>16</td>
					    <td>3.08</td>
							<td>3,500</td>
					    <td>397</td>
					  </tr>
						<tr>
					    <td>10</td>
					    <td>7/1.35</td>
					    <td>4.05</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>20</td>
					    <td>1.83</td>
							<td>3,500</td>
					    <td>585</td>
					  </tr>
						<tr>
					    <td>16</td>
							<td>원형압축</td>
					    <td>4.7</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>22</td>
					    <td>1.15</td>
							<td>3,500</td>
					    <td>816</td>
					  </tr>
						<tr>
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>26</td>
					    <td>0.727</td>
							<td>3,500</td>
					    <td>1,242</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>28</td>
					    <td>0.524</td>
							<td>3,500</td>
					    <td>1,661</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>1</td>
					    <td>1.8</td>
					    <td>32</td>
					    <td>0.387</td>
							<td>3,500</td>
					    <td>2,215</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>1.1</td>
					    <td>1.8</td>
					    <td>36</td>
					    <td>0.268</td>
							<td>3,500</td>
					    <td>3,110</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>1.1</td>
					    <td>1.8</td>
					    <td>42</td>
					    <td>0.193</td>
							<td>3,500</td>
					    <td>4,207</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>1.2</td>
					    <td>1.9</td>
					    <td>46</td>
					    <td>0.153</td>
							<td>3,500</td>
					    <td>5,307</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>1.4</td>
					    <td>2</td>
					    <td>51</td>
					    <td>0.124</td>
							<td>3,500</td>
					    <td>6,327</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>1.6</td>
					    <td>2.1</td>
					    <td>56</td>
					    <td>0.0991</td>
							<td>3,500</td>
					    <td>7,846</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>1.7</td>
					    <td>2.3</td>
					    <td>63</td>
					    <td>0.0754</td>
							<td>3,500</td>
					    <td>10.038</td>
					  </tr>
						<tr>
					    <td>300</td>
					    <td>원형압축</td>
					    <td>20.5</td>
					    <td>1.8</td>
					    <td>2.4</td>
					    <td>70</td>
					    <td>0.0601</td>
							<td>3,500</td>
					    <td>12,609</td>
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
				descSrc: `
				<h1>0.6 / 1kV HFCO - 단심</h1>
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
					    <td>18.3</td>
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

				<h1>0.6 / 1kV HFCO - 2심</h1>
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
					    <td>18.3</td>
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

				<h1>0.6 / 1kV HFCO - 3심</h1>
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
					    <td>11.5</td>
					    <td>12.1</td>
					    <td>3,500</td>
					    <td>148</td>
					  </tr>
						<tr>
					    <td>2.5</td>
					    <td>7/0.67</td>
					    <td>2.01</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>12.5</td>
					    <td>7.41</td>
					    <td>3,500</td>
					    <td>189</td>
					  </tr>
						<tr>
					    <td>4</td>
					    <td>7/0.85</td>
					    <td>2.55</td>
							<td>0.7</td>
					    <td>1.8</td>
					    <td>13.5</td>
					    <td>4.61</td>
							<td>3,500</td>
					    <td>245</td>
					  </tr>
						<tr>
					    <td>6</td>
					    <td>7/1.04</td>
					    <td>3.12</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>14.5</td>
					    <td>3.08</td>
							<td>3,500</td>
					    <td>321</td>
					  </tr>
						<tr>
					    <td>10</td>
					    <td>7/1.35</td>
					    <td>4.05</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>18</td>
					    <td>1.83</td>
							<td>3,500</td>
					    <td>464</td>
					  </tr>
						<tr>
					    <td>16</td>
							<td>원형압축</td>
					    <td>4.7</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>19.5</td>
					    <td>1.15</td>
							<td>3,500</td>
					    <td>649</td>
					  </tr>
						<tr>
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>23</td>
					    <td>0.727</td>
							<td>3,500</td>
					    <td>975</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>25</td>
					    <td>0.524</td>
							<td>3,500</td>
					    <td>1,287</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>1</td>
					    <td>1.8</td>
					    <td>29</td>
					    <td>0.387</td>
							<td>3,500</td>
					    <td>1,693</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>1.1</td>
					    <td>1.9</td>
					    <td>33</td>
					    <td>0.268</td>
							<td>3,500</td>
					    <td>2,383</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>1.1</td>
					    <td>2</td>
					    <td>37</td>
					    <td>0.193</td>
							<td>3,500</td>
					    <td>3,224</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>1.2</td>
					    <td>2.1</td>
					    <td>41</td>
					    <td>0.153</td>
							<td>3,500</td>
					    <td>4,036</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>1.4</td>
					    <td>2.3</td>
					    <td>46</td>
					    <td>0.124</td>
							<td>3,500</td>
					    <td>4,840</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>1.6</td>
					    <td>2.4</td>
					    <td>50</td>
					    <td>0.0991</td>
							<td>3,500</td>
					    <td>5,975</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>1.7</td>
					    <td>2.6</td>
					    <td>57</td>
					    <td>0.0754</td>
							<td>3,500</td>
					    <td>7,641</td>
					  </tr>
						<tr>
					    <td>300</td>
					    <td>원형압축</td>
					    <td>20.5</td>
					    <td>1.8</td>
					    <td>2.7</td>
					    <td>62</td>
					    <td>0.0601</td>
							<td>3,500</td>
					    <td>9,638</td>
					  </tr>
					</tbody>
				</table>

				<h1>0.6 / 1kV HFCO - 4심</h1>
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
					    <td>12.5</td>
					    <td>12.1</td>
					    <td>3,500</td>
					    <td>179</td>
					  </tr>
						<tr>
					    <td>2.5</td>
					    <td>7/0.67</td>
					    <td>2.01</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>13.5</td>
					    <td>7.41</td>
					    <td>3,500</td>
					    <td>226</td>
					  </tr>
						<tr>
					    <td>4</td>
					    <td>7/0.85</td>
					    <td>2.55</td>
							<td>0.7</td>
					    <td>1.8</td>
					    <td>14.5</td>
					    <td>4.61</td>
							<td>3,500</td>
					    <td>305</td>
					  </tr>
						<tr>
					    <td>6</td>
					    <td>7/1.04</td>
					    <td>3.12</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>16</td>
					    <td>3.08</td>
							<td>3,500</td>
					    <td>397</td>
					  </tr>
						<tr>
					    <td>10</td>
					    <td>7/1.35</td>
					    <td>4.05</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>20</td>
					    <td>1.83</td>
							<td>3,500</td>
					    <td>585</td>
					  </tr>
						<tr>
					    <td>16</td>
							<td>원형압축</td>
					    <td>4.7</td>
					    <td>0.7</td>
					    <td>1.8</td>
					    <td>22</td>
					    <td>1.15</td>
							<td>3,500</td>
					    <td>816</td>
					  </tr>
						<tr>
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>26</td>
					    <td>0.727</td>
							<td>3,500</td>
					    <td>1,242</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>0.9</td>
					    <td>1.8</td>
					    <td>28</td>
					    <td>0.524</td>
							<td>3,500</td>
					    <td>1,661</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>1</td>
					    <td>1.8</td>
					    <td>32</td>
					    <td>0.387</td>
							<td>3,500</td>
					    <td>2,215</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>1.1</td>
					    <td>1.8</td>
					    <td>36</td>
					    <td>0.268</td>
							<td>3,500</td>
					    <td>3,110</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>1.1</td>
					    <td>1.8</td>
					    <td>42</td>
					    <td>0.193</td>
							<td>3,500</td>
					    <td>4,207</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>1.2</td>
					    <td>1.9</td>
					    <td>46</td>
					    <td>0.153</td>
							<td>3,500</td>
					    <td>5,307</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>1.4</td>
					    <td>2</td>
					    <td>51</td>
					    <td>0.124</td>
							<td>3,500</td>
					    <td>6,327</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>1.6</td>
					    <td>2.1</td>
					    <td>56</td>
					    <td>0.0991</td>
							<td>3,500</td>
					    <td>7,846</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>1.7</td>
					    <td>2.3</td>
					    <td>63</td>
					    <td>0.0754</td>
							<td>3,500</td>
					    <td>10.038</td>
					  </tr>
						<tr>
					    <td>300</td>
					    <td>원형압축</td>
					    <td>20.5</td>
					    <td>1.8</td>
					    <td>2.4</td>
					    <td>70</td>
					    <td>0.0601</td>
							<td>3,500</td>
					    <td>12,609</td>
					  </tr>
					</tbody>
				</table>
				`,
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
				descSrc: `
				<h1>6 / 10kV F-CV - 단심</h1>
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
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>3.4</td>
					    <td>1.5</td>
					    <td>21</td>
					    <td>0.727</td>
							<td>21</td>
					    <td>547</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>3.4</td>
					    <td>1.6</td>
					    <td>22</td>
					    <td>0.524</td>
							<td>21</td>
					    <td>671</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>3.4</td>
					    <td>1.6</td>
					    <td>23</td>
					    <td>0.387</td>
							<td>21</td>
					    <td>812</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>3.4</td>
					    <td>1.7</td>
					    <td>25</td>
					    <td>0.26821</td>
							<td>21</td>
					    <td>1,056</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>3.4</td>
					    <td>1.7</td>
					    <td>27</td>
					    <td>0.193</td>
							<td>21</td>
					    <td>1,337</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>3.4</td>
					    <td>1.8</td>
					    <td>28</td>
					    <td>0.153</td>
							<td>21</td>
					    <td>1,617</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>3.4</td>
					    <td>1.8</td>
					    <td>30</td>
					    <td>0.124</td>
							<td>21</td>
					    <td>1,858</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>3.4</td>
					    <td>1.9</td>
					    <td>32</td>
					    <td>0.0991</td>
							<td>21</td>
					    <td>2,225</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>3.4</td>
					    <td>2</td>
					    <td>35</td>
					    <td>0.0754</td>
							<td>21</td>
					    <td>2,779</td>
					  </tr>
						<tr>
					    <td>300</td>
							<td>원형압축</td>
					    <td>20.5</td>
					    <td>3.4</td>
					    <td>3</td>
					    <td>37</td>
					    <td>0.0601</td>
							<td>21</td>
					    <td>3,416</td>
					  </tr>
						<tr>
					    <td>400</td>
					    <td>원형압축</td>
					    <td>23.2</td>
					    <td>3.4</td>
					    <td>2.2</td>
					    <td>40</td>
					    <td>0.047</td>
							<td>21</td>
					    <td>4,406</td>
					  </tr>
						<tr>
					    <td>500</td>
					    <td>원형압축</td>
					    <td>26.4</td>
					    <td>3.4</td>
					    <td>2.2</td>
					    <td>43</td>
					    <td>0.0366</td>
							<td>21</td>
					    <td>5,328</td>
					  </tr>
						<tr>
					    <td>630</td>
					    <td>원형압축</td>
					    <td>30.2</td>
					    <td>3.4</td>
					    <td>2.3</td>
					    <td>48</td>
					    <td>0.0283</td>
							<td>21</td>
					    <td>6,677</td>
					  </tr>
					</tbody>
				</table>

				<h1>6 / 10kV F-CV - 3심</h1>
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
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>3.4</td>
					    <td>2.2</td>
					    <td>41</td>
					    <td>727</td>
							<td>21</td>
					    <td>1,835</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>3.4</td>
					    <td>2.3</td>
					    <td>43</td>
					    <td>0.524</td>
							<td>21</td>
					    <td>2,221</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>3.4</td>
					    <td>2.4</td>
					    <td>46</td>
					    <td>0.387</td>
							<td>21</td>
					    <td>2,699</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>3.4</td>
					    <td>2.5</td>
					    <td>50</td>
					    <td>0.268</td>
							<td>21</td>
					    <td>3,474</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>3.4</td>
					    <td>2.6</td>
					    <td>53</td>
					    <td>0.193</td>
							<td>21</td>
					    <td>4,398</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>3.4</td>
					    <td>2.7</td>
					    <td>57</td>
					    <td>0.153</td>
							<td>21</td>
					    <td>5,267</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>3.4</td>
					    <td>2.8</td>
					    <td>60</td>
					    <td>0.124</td>
							<td>21</td>
					    <td>6,071</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>3.4</td>
					    <td>2.9</td>
					    <td>64</td>
					    <td>0.0991</td>
							<td>21</td>
					    <td>7,232</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>3.4</td>
					    <td>3.1</td>
					    <td>69</td>
					    <td>0.0754</td>
							<td>21</td>
					    <td>9,009</td>
					  </tr>
						<tr>
					    <td>300</td>
							<td>원형압축</td>
					    <td>20.5</td>
					    <td>3.4</td>
					    <td>3.3</td>
					    <td>74</td>
					    <td>0.0601</td>
							<td>21</td>
					    <td>11,098</td>
					  </tr>
					</tbody>
				</table>
				`,
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
				descSrc: `
				<h1>6 / 10kV HFCO - 단심</h1>
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
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>3.4</td>
					    <td>1.5</td>
					    <td>21</td>
					    <td>0.727</td>
							<td>21</td>
					    <td>547</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>3.4</td>
					    <td>1.6</td>
					    <td>22</td>
					    <td>0.524</td>
							<td>21</td>
					    <td>671</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>3.4</td>
					    <td>1.6</td>
					    <td>23</td>
					    <td>0.387</td>
							<td>21</td>
					    <td>812</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>3.4</td>
					    <td>1.7</td>
					    <td>25</td>
					    <td>0.26821</td>
							<td>21</td>
					    <td>1,056</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>3.4</td>
					    <td>1.7</td>
					    <td>27</td>
					    <td>0.193</td>
							<td>21</td>
					    <td>1,337</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>3.4</td>
					    <td>1.8</td>
					    <td>28</td>
					    <td>0.153</td>
							<td>21</td>
					    <td>1,617</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>3.4</td>
					    <td>1.8</td>
					    <td>30</td>
					    <td>0.124</td>
							<td>21</td>
					    <td>1,858</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>3.4</td>
					    <td>1.9</td>
					    <td>32</td>
					    <td>0.0991</td>
							<td>21</td>
					    <td>2,225</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>3.4</td>
					    <td>2</td>
					    <td>35</td>
					    <td>0.0754</td>
							<td>21</td>
					    <td>2,779</td>
					  </tr>
						<tr>
					    <td>300</td>
							<td>원형압축</td>
					    <td>20.5</td>
					    <td>3.4</td>
					    <td>3</td>
					    <td>37</td>
					    <td>0.0601</td>
							<td>21</td>
					    <td>3,416</td>
					  </tr>
						<tr>
					    <td>400</td>
					    <td>원형압축</td>
					    <td>23.2</td>
					    <td>3.4</td>
					    <td>2.2</td>
					    <td>40</td>
					    <td>0.047</td>
							<td>21</td>
					    <td>4,406</td>
					  </tr>
						<tr>
					    <td>500</td>
					    <td>원형압축</td>
					    <td>26.4</td>
					    <td>3.4</td>
					    <td>2.2</td>
					    <td>43</td>
					    <td>0.0366</td>
							<td>21</td>
					    <td>5,328</td>
					  </tr>
						<tr>
					    <td>630</td>
					    <td>원형압축</td>
					    <td>30.2</td>
					    <td>3.4</td>
					    <td>2.3</td>
					    <td>48</td>
					    <td>0.0283</td>
							<td>21</td>
					    <td>6,677</td>
					  </tr>
					</tbody>
				</table>

				<h1>6 / 10kV HFCO - 3심</h1>
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
					    <td>25</td>
							<td>원형압축</td>
					    <td>5.9</td>
					    <td>3.4</td>
					    <td>2.2</td>
					    <td>41</td>
					    <td>727</td>
							<td>21</td>
					    <td>1,835</td>
					  </tr>
						<tr>
					    <td>35</td>
							<td>원형압축</td>
					    <td>6.9</td>
					    <td>3.4</td>
					    <td>2.3</td>
					    <td>43</td>
					    <td>0.524</td>
							<td>21</td>
					    <td>2,221</td>
					  </tr>
						<tr>
					    <td>50</td>
							<td>원형압축</td>
					    <td>8.1</td>
					    <td>3.4</td>
					    <td>2.4</td>
					    <td>46</td>
					    <td>0.387</td>
							<td>21</td>
					    <td>2,699</td>
					  </tr>
						<tr>
					    <td>70</td>
							<td>원형압축</td>
					    <td>9.8</td>
					    <td>3.4</td>
					    <td>2.5</td>
					    <td>50</td>
					    <td>0.268</td>
							<td>21</td>
					    <td>3,474</td>
					  </tr>
						<tr>
					    <td>95</td>
							<td>원형압축</td>
					    <td>11.4</td>
					    <td>3.4</td>
					    <td>2.6</td>
					    <td>53</td>
					    <td>0.193</td>
							<td>21</td>
					    <td>4,398</td>
					  </tr>
						<tr>
					    <td>120</td>
							<td>원형압축</td>
					    <td>12.9</td>
					    <td>3.4</td>
					    <td>2.7</td>
					    <td>57</td>
					    <td>0.153</td>
							<td>21</td>
					    <td>5,267</td>
					  </tr>
						<tr>
					    <td>150</td>
							<td>원형압축</td>
					    <td>14.4</td>
					    <td>3.4</td>
					    <td>2.8</td>
					    <td>60</td>
					    <td>0.124</td>
							<td>21</td>
					    <td>6,071</td>
					  </tr>
						<tr>
					    <td>185</td>
							<td>원형압축</td>
					    <td>15.9</td>
					    <td>3.4</td>
					    <td>2.9</td>
					    <td>64</td>
					    <td>0.0991</td>
							<td>21</td>
					    <td>7,232</td>
					  </tr>
						<tr>
					    <td>240</td>
							<td>원형압축</td>
					    <td>18.3</td>
					    <td>3.4</td>
					    <td>3.1</td>
					    <td>69</td>
					    <td>0.0754</td>
							<td>21</td>
					    <td>9,009</td>
					  </tr>
						<tr>
					    <td>300</td>
							<td>원형압축</td>
					    <td>20.5</td>
					    <td>3.4</td>
					    <td>3.3</td>
					    <td>74</td>
					    <td>0.0601</td>
							<td>21</td>
					    <td>11,098</td>
					  </tr>
					</tbody>
				</table>
				`,
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
				descSrc: `
				<h1>6 / 10kV 22.9kV CN / CV-W, 22.9kV TR-CN / CV-W </h1>
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
							<th rowspan="2">소선수/소선지름</th>
							<th>외경</th>
						</tr>
						<tr>
							<th>mm2</th>
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
					    <td>60</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>9.3</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>36</td>
					    <td>0.305</td>
					    <td>3,000</td>
					    <td>1,760</td>
					  </tr>
						<tr>
					    <td>100</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>12</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>40</td>
					    <td>0.183</td>
					    <td>2,500</td>
					    <td>2,430</td>
					  </tr>
						<tr>
					    <td>150</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>14.7</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>43</td>
					    <td>0.122</td>
					    <td>2,000</td>
					    <td>3,150</td>
					  </tr>
						<tr>
					    <td>200</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>17</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>45</td>
					    <td>0.0915</td>
					    <td>2,000</td>
					    <td>3,980</td>
					  </tr>
						<tr>
					    <td>250</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>19</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>48</td>
					    <td>0.0739</td>
					    <td>2,000</td>
					    <td>4,700</td>
					  </tr>
						<tr>
					    <td>325</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>21.7</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>51</td>
					    <td>0.0568</td>
					    <td>2,000</td>
					    <td>5,750</td>
					  </tr>
						<tr>
					    <td>400</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>24.1</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>54</td>
					    <td>0.0462</td>
					    <td>1,500</td>
					    <td>6,800</td>
					  </tr>
						<tr>
					    <td>500</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>26.9</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>57</td>
					    <td>0.0369</td>
					    <td>1,500</td>
					    <td>8,240</td>
					  </tr>
						<tr>
					    <td>600</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>29.5</td>
					    <td>6.6</td>
					    <td>4</td>
					    <td>61</td>
					    <td>0.0308</td>
					    <td>1,500</td>
					    <td>10,050</td>
					  </tr>
					</tbody>
				</table>
				`,
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
				descSrc: `
				<h1>22.9kV FR-CN/CO-W</h1>
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
							<th rowspan="2">소선수/소선지름</th>
							<th>외경</th>
						</tr>
						<tr>
							<th>mm2</th>
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
					    <td>60</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>9.3</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>36</td>
					    <td>0.305</td>
					    <td>3,000</td>
					    <td>1,760</td>
					  </tr>
						<tr>
					    <td>100</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>12</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>40</td>
					    <td>0.183</td>
					    <td>2,500</td>
					    <td>2,430</td>
					  </tr>
						<tr>
					    <td>150</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>14.7</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>43</td>
					    <td>0.122</td>
					    <td>2,000</td>
					    <td>3,150</td>
					  </tr>
						<tr>
					    <td>200</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>17</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>45</td>
					    <td>0.0915</td>
					    <td>2,000</td>
					    <td>3,980</td>
					  </tr>
						<tr>
					    <td>250</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>19</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>48</td>
					    <td>0.0739</td>
					    <td>2,000</td>
					    <td>4,700</td>
					  </tr>
						<tr>
					    <td>325</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>21.7</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>51</td>
					    <td>0.0568</td>
					    <td>2,000</td>
					    <td>5,750</td>
					  </tr>
						<tr>
					    <td>400</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>24.1</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>54</td>
					    <td>0.0462</td>
					    <td>1,500</td>
					    <td>6,800</td>
					  </tr>
						<tr>
					    <td>500</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>26.9</td>
					    <td>6.6</td>
					    <td>3</td>
					    <td>57</td>
					    <td>0.0369</td>
					    <td>1,500</td>
					    <td>8,240</td>
					  </tr>
						<tr>
					    <td>600</td>
					    <td>원형압축연선<br>(수밀형)</td>
					    <td>29.5</td>
					    <td>6.6</td>
					    <td>4</td>
					    <td>61</td>
					    <td>0.0308</td>
					    <td>1,500</td>
					    <td>10,050</td>
					  </tr>
					</tbody>
				</table>
				`,
				imgSrc: "images/product/cable/0/Picture6.png"
			},
		]
	};


	$pCable.insulatedWire = {
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
				descSrc: `
				<h1>AS (Annealed Copper Stranded Wire)</h1>
				<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">도체<br>저항 20℃</th><th rowspan="2">계산 중량</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>12.1</td><td>14</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>7.41</td><td>23</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>4.61</td><td>36</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>3.08</td><td>54</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>1.83</td><td>90</td></tr><tr><td>16</td><td>7/1.671</td><td>5.01</td><td>1.15</td><td>138</td></tr><tr><td>25</td><td>7/2.102</td><td>6.31</td><td>0.727</td><td>219</td></tr><tr><td>35</td><td>19/1.504</td><td>7.52</td><td>0.524</td><td>304</td></tr><tr><td>50</td><td>19/1.750</td><td>8.75</td><td>0.387</td><td>412</td></tr><tr><td>70</td><td>19/2.104</td><td>10.52</td><td>0.268</td><td>596</td></tr><tr><td>95</td><td>19/2.476</td><td>12.38</td><td>0.193</td><td>825</td></tr><tr><td>120</td><td>37/1.994</td><td>13.96</td><td>0.153</td><td>1,040</td></tr><tr><td>150</td><td>37/2.212</td><td>15.48</td><td>0.124</td><td>1,280</td></tr><tr><td>185</td><td>37/2.475</td><td>17.33</td><td>0.0991</td><td>1,602</td></tr><tr><td>240</td><td>61/2.211</td><td>19.9</td><td>0.0754</td><td>2,105</td></tr><tr><td>300</td><td>61/2.476</td><td>22.28</td><td>0.0601</td><td>2,640</td></tr><tr><td>400</td><td>61/2.797</td><td>25.17</td><td>0.047</td><td>3,369</td></tr><tr><td>500</td><td>61/3.170</td><td>28.53</td><td>0.0366</td><td>4,327</td></tr><tr><td>630</td><td>91/2,950</td><td>32.45</td><td>0.0283</td><td>5,585</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>300 / 500V KS IEC 60227 07(HIV)</h1>
					<table class="table table-bordered"><thead><tr><th colspan="2">도체</th><th rowspan="2">절연 두께</th><th colspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">절연 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th rowspan="2">소선 구성</th><th>하한 값</th><th>상한 값</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>Ω/㎞</th><th>Kv</th><th>kg/km</th></thead><tbody></tr><tr><td>1.5</td><td>1/1.38</td><td>0.7</td><td>2.6</td><td>3.2</td><td>12.1</td><td>0.011</td><td>2</td><td>20</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.8</td><td>3.2</td><td>3.9</td><td>7.41</td><td>0.09</td><td>2</td><td>30</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV F-GV</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</td><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>2.2</td><td>6.5</td><td>12.1</td><td>3,500</td><td>60</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>2.2</td><td>7</td><td>7.41</td><td>3,500</td><td>80</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>2.4</td><td>8</td><td>4.61</td><td>3,500</td><td>110</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>2.4</td><td>8.5</td><td>3.08</td><td>3,500</td><td>130</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>2.4</td><td>9.5</td><td>1.83</td><td>3,500</td><td>180</td></tr><tr><td>16</td><td>원형압축연선</td><td>4.7</td><td>2.4</td><td>10</td><td>1.15</td><td>3,500</td><td>230</td></tr><tr><td>25</td><td>원형압축연선</td><td>5.9</td><td>2.6</td><td>12</td><td>0.727</td><td>3,500</td><td>340</td></tr><tr><td>35</td><td>원형압축연선</td><td>6.9</td><td>2.6</td><td>13</td><td>0.524</td><td>3,500</td><td>440</td></tr><tr><td>50</td><td>원형압축연선</td><td>8.1</td><td>2.8</td><td>14.5</td><td>0.387</td><td>3,500</td><td>570</td></tr><tr><td>70</td><td>원형압축연선</td><td>9.8</td><td>2.8</td><td>16</td><td>0.268</td><td>3,500</td><td>780</td></tr><tr><td>95</td><td>원형압축연선</td><td>11.4</td><td>3.1</td><td>18.5</td><td>0.193</td><td>3,500</td><td>1060</td></tr><tr><td>120</td><td>원형압축연선</td><td>12.9</td><td>3.1</td><td>20</td><td>0.153</td><td>3,500</td><td>1300</td></tr><tr><td>150</td><td>원형압축연선</td><td>14.4</td><td>3.4</td><td>22</td><td>0.124</td><td>3,500</td><td>1600</td></tr><tr><td>185</td><td>원형압축연선</td><td>15.9</td><td>3.7</td><td>25</td><td>0.0991</td><td>3,500</td><td>1980</td></tr><tr><td>240</td><td>원형압축연선</td><td>18.3</td><td>4</td><td>28</td><td>0.0754</td><td>3,500</td><td>2580</td></tr><tr><td>300</td><td>원형압축연선</td><td>20.5</td><td>4.3</td><td>30</td><td>0.0601</td><td>3,500</td><td>3210</td></tr><tr><td>400</td><td>원형압축연선</td><td>23.2</td><td>4.6</td><td>34</td><td>0.047</td><td>3,500</td><td>4050</td></tr><tr><td>500</td><td>원형압축연선</td><td>26.4</td><td>4.9</td><td>38</td><td>0.03666</td><td>3,500</td><td>5150</td></tr><tr><td>630</td><td>원형압축연선</td><td>30.2</td><td>5</td><td>42</td><td>0.0283</td><td>3,500</td><td>6570</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>450/750V HFIX - 단선</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>1/1.38</td><td>1.36</td><td>0.7</td><td>3.2</td><td>12.1</td><td>2,500</td><td>20</td></tr><tr><td>2.5</td><td>1/1.78</td><td>1.78</td><td>0.8</td><td>3.7</td><td>7.41</td><td>2,500</td><td>40</td></tr><tr><td>4</td><td>1/2.25</td><td>2.25</td><td>0.8</td><td>4.2</td><td>4.61</td><td>2,500</td><td>50</td></tr></tbody></table>
					<h1>450/750V HFIX - 연선</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th rowspan="2">소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td></td><td></td><td>0.7</td><td>3.4</td><td>12.1</td><td>2,500</td><td>22</td></tr><tr><td>2.5</td><td></td><td></td><td>0.8</td><td>4</td><td>7.41</td><td>2,500</td><td>34</td></tr><tr><td>4</td><td></td><td></td><td>0.8</td><td>4.6</td><td>4.61</td><td>2,500</td><td>28</td></tr><tr><td>6</td><td></td><td></td><td>0.8</td><td>5.2</td><td>3.08</td><td>2,500</td><td>70</td></tr><tr><td>10</td><td></td><td></td><td>1</td><td>6.7</td><td>1.83</td><td>2,500</td><td>116</td></tr><tr><td>16</td><td></td><td></td><td>1</td><td>7.8</td><td>1.15</td><td>2,500</td><td>160</td></tr><tr><td>25</td><td></td><td></td><td>1.2</td><td>9.7</td><td>0.727</td><td>2,500</td><td>255</td></tr><tr><td>35</td><td></td><td></td><td>1.2</td><td>10.9</td><td>0.524</td><td>2,500</td><td>345</td></tr><tr><td>50</td><td></td><td></td><td>1.4</td><td>12.8</td><td>0.387</td><td>2,500</td><td>470</td></tr><tr><td>70</td><td></td><td></td><td>1.4</td><td>14.6</td><td>0.268</td><td>2,500</td><td>660</td></tr><tr><td>95</td><td></td><td></td><td>1.6</td><td>17.1</td><td>0.193</td><td>2,500</td><td>900</td></tr><tr><td>120</td><td></td><td></td><td>1.6</td><td>18.8</td><td>0.153</td><td>2,500</td><td>1120</td></tr><tr><td>150</td><td></td><td></td><td>1.8</td><td>20.9</td><td>0.124</td><td>2,500</td><td>1400</td></tr><tr><td>185</td><td></td><td></td><td>2</td><td>23.3</td><td>0.0991</td><td>2,500</td><td>1740</td></tr><tr><td>240</td><td></td><td></td><td>2.2</td><td>26.6</td><td>0.0754</td><td>2,500</td><td>2270</td></tr><tr><td>300</td><td></td><td></td><td>2.4</td><td>29.6</td><td>0.0601</td><td>2,500</td><td>2840</td></tr><tr><td>400</td><td></td><td></td><td>2.6</td><td>33.3</td><td>0.047</td><td>2,500</td><td>3640</td></tr></tbody></table>
				`,
				imgSrc: "images/product/cable/1/Picture6.png"
			},
		]
	};

	$pCable.controlCable = {
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
				descSrc: `
					<h1>0.6 / 1kV F-CVV</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>133</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>163</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>163</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>284</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>160</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>203</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>287</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>362</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>192</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>244</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>352</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>451</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>229</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>290</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>418</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>546</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>265</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>338</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>492</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>646</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>280</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>365</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>536</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>708</td></tr><tr><td rowspan="4">8</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>309</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>417</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>613</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>801</td></tr><tr><td rowspan="4">10</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>393</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>512</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>770</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,005</td></tr><tr><td rowspan="4">12</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>445</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>587</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>873</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,161</td></tr><tr><td rowspan="4">15</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>516</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>685</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,409</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,606</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>656</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>866</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,360</td></tr><tr><td rowspan="3">30</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>26</td><td>12.1</td><td>3,500</td><td>926</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>28</td><td>7.41</td><td>3,500</td><td>1,253</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>35</td><td>4.61</td><td>3,500</td><td>1,949</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV F-CVV-S</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>154</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>186</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>257</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>315</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>182</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>227</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>317</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>395</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>216</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>271</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>386</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>488</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>256</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>319</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>454</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>556</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>294</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>370</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>532</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>691</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>309</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>398</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>576</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>752</td></tr><tr><td rowspan="4">8</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>341</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>452</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>657</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>849</td></tr><tr><td rowspan="4">10</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>431</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>554</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>822</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,063</td></tr><tr><td rowspan="4">12</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>484</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>630</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>927</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,207</td></tr><tr><td rowspan="4">15</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>558</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>732</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,120</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,460</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>703</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>930</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,439</td></tr><tr><td rowspan="4">30</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>33</td><td>3.08</td><td>3,500</td><td>1,876</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>27</td><td>12.1</td><td>3,500</td><td>983</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>29</td><td>7.41</td><td>3,500</td><td>1,331</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>36</td><td>4.61</td><td>3,500</td><td>1,992</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV F-CVV-SB</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>154</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>186</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>257</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>315</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>182</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>227</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>317</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>395</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>216</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>271</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>386</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>488</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>256</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>319</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>454</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>556</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>294</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>370</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>532</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>691</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>309</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>398</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>576</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>752</td></tr><tr><td rowspan="4">8</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>341</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>452</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>657</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>849</td></tr><tr><td rowspan="4">10</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>431</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>554</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>822</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,063</td></tr><tr><td rowspan="4">12</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>484</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>630</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>927</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,207</td></tr><tr><td rowspan="4">15</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>558</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>732</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,120</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,460</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>703</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>930</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,439</td></tr><tr><td rowspan="4">30</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>33</td><td>3.08</td><td>3,500</td><td>1,876</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>27</td><td>12.1</td><td>3,500</td><td>983</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>29</td><td>7.41</td><td>3,500</td><td>1,331</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>36</td><td>4.61</td><td>3,500</td><td>1,992</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV F-CVV-AMS, 0.6 / 1kV F-CVV-I / CAMS</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>138</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>169</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>234</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>290</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>166</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>209</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>293</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>368</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>198</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>250</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>358</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>457</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>235</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>296</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>424</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>552</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>271</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>344</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>498</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>652</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>286</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>371</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>542</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>542</td></tr><tr><td rowspan="4">8</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>714</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>315</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>423</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>619</td></tr><tr><td rowspan="4">10</td><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>807</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>399</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>518</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>776</td></tr><tr><td rowspan="4">12</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,011</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>451</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>593</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>879</td></tr><tr><td rowspan="4">15</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,167</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>522</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>691</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,415</td></tr><tr><td rowspan="3">20</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,612</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>662</td></tr><tr><td>2.5</td><td>6/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>32</td><td>7.41</td><td>3,500</td><td>872</td></tr><tr><td rowspan="5">30</td><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,366</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>33</td><td>3.08</td><td>3,500</td><td>1,827</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>27</td><td>12.1</td><td>3,500</td><td>932</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>29</td><td>7.41</td><td>3,500</td><td>11,259</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>36</td><td>4.61</td><td>3,500</td><td>1,955</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV HFCCO</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>154</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>186</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>257</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>315</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>182</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>227</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>317</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>395</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>216</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>271</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>386</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>488</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>256</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>319</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>454</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>556</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>294</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>370</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>532</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>691</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>309</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>398</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>576</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>752</td></tr><tr><td rowspan="4">8</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>341</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>452</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>657</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>849</td></tr><tr><td rowspan="4">10</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>431</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>554</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>822</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,063</td></tr><tr><td rowspan="4">12</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>484</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>630</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>927</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,207</td></tr><tr><td rowspan="4">15</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>558</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>732</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,120</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,460</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>703</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>930</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,439</td></tr><tr><td rowspan="4">30</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>33</td><td>3.08</td><td>3,500</td><td>1,876</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>27</td><td>12.1</td><td>3,500</td><td>983</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>29</td><td>7.41</td><td>3,500</td><td>1,331</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>36</td><td>4.61</td><td>3,500</td><td>1,992</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV HFCCO-S</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>154</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>186</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>257</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>315</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>182</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>227</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>317</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>395</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>216</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>271</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>386</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>488</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>256</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>319</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>454</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>556</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>294</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>370</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>532</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>691</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>309</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>398</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>576</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>752</td></tr><tr><td rowspan="4">8</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>341</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>452</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>657</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>849</td></tr><tr><td rowspan="4">10</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>431</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>554</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>822</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,063</td></tr><tr><td rowspan="4">12</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>484</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>630</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>927</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,207</td></tr><tr><td rowspan="4">15</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>558</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>732</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,120</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,460</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>703</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>930</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,439</td></tr><tr><td rowspan="4">30</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>33</td><td>3.08</td><td>3,500</td><td>1,876</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>27</td><td>12.1</td><td>3,500</td><td>983</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>29</td><td>7.41</td><td>3,500</td><td>1,331</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>36</td><td>4.61</td><td>3,500</td><td>1,992</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV HFCCO-SB</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>154</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>186</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>257</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>315</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>182</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>227</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>317</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>395</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>216</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>271</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>386</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>488</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>256</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>319</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>454</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>556</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>294</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>370</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>532</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>691</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>309</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>398</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>576</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>752</td></tr><tr><td rowspan="4">8</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>341</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>452</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>657</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>849</td></tr><tr><td rowspan="4">10</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>431</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>554</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>822</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,063</td></tr><tr><td rowspan="4">12</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>484</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>630</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>927</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,207</td></tr><tr><td rowspan="4">15</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>558</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>732</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,120</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,460</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>703</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>930</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,439</td></tr><tr><td rowspan="4">30</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>33</td><td>3.08</td><td>3,500</td><td>1,876</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>27</td><td>12.1</td><td>3,500</td><td>983</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>29</td><td>7.41</td><td>3,500</td><td>1,331</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>36</td><td>4.61</td><td>3,500</td><td>1,992</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV HFCCO-AMS, 0.6 / 1kV HFCCO-I/CAMS</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω-㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="4">2</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>154</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>186</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14</td><td>4.6</td><td>3,500</td><td>257</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>15</td><td>3.08</td><td>3,500</td><td>315</td></tr><tr><td rowspan="4">3</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>182</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>227</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>317</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>1.6</td><td>3.08</td><td>3,500</td><td>395</td></tr><tr><td rowspan="4">4</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>216</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>271</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>386</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>17</td><td>3.08</td><td>3,500</td><td>488</td></tr><tr><td rowspan="4">5</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>256</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>319</td></tr><tr><td>4</td><td>7/0.67</td><td>2.55</td><td>1</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>454</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>556</td></tr><tr><td rowspan="4">6</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>294</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>370</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>532</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>691</td></tr><tr><td rowspan="4">7</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>309</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>15.5</td><td>7.41</td><td>3,500</td><td>398</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>576</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>21</td><td>3.08</td><td>3,500</td><td>752</td></tr><tr><td rowspan="4">8</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>1</td><td>1.8</td><td>15.5</td><td>12.1</td><td>3,500</td><td>341</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>1</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>452</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.8</td><td>1.8</td><td>20</td><td>4.61</td><td>3,500</td><td>657</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.8</td><td>1.8</td><td>22</td><td>3.08</td><td>3,500</td><td>849</td></tr><tr><td rowspan="4">10</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>431</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>10.5</td><td>7.41</td><td>3,500</td><td>554</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>822</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>26</td><td>3.08</td><td>3,500</td><td>1,063</td></tr><tr><td rowspan="4">12</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>18.5</td><td>12.1</td><td>3,500</td><td>484</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>630</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>24</td><td>4.61</td><td>3,500</td><td>927</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>27</td><td>3.08</td><td>3,500</td><td>1,207</td></tr><tr><td rowspan="4">15</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>19.5</td><td>12.1</td><td>3,500</td><td>558</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>732</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>26</td><td>4.61</td><td>3,500</td><td>1,120</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>29</td><td>3.08</td><td>3,500</td><td>1,460</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>703</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>930</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>29</td><td>4.61</td><td>3,500</td><td>1,439</td></tr><tr><td rowspan="4">30</td><td>6</td><td>7/1.04</td><td>3.12</td><td>1</td><td>1.8</td><td>33</td><td>3.08</td><td>3,500</td><td>1,876</td></tr><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.8</td><td>1.8</td><td>27</td><td>12.1</td><td>3,500</td><td>983</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.8</td><td>1.8</td><td>29</td><td>7.41</td><td>3,500</td><td>1,331</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>1</td><td>1.8</td><td>36</td><td>4.61</td><td>3,500</td><td>1,992</td></tr></tbody></table>
				`,
				imgSrc: "images/product/cable/2/Picture10.png"
			},
		]
	};

	$pCable.communicationCable = {
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
				descSrc: `
					<h1>HFBT/FBT 연선</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">기호</th><th rowspan="2">내부도체 외경</th><th colspan="2">절연체</th><th colspan="3">외부도체</th><th colspan="2">시스</th><th rowspan="2">완성품 외경</th><th rowspan="2">개산 중량</th></tr><tr><th>재질</td><th>외경</th><th rowspan="2">1차</th><th rowspan="2">2차</th><th rowspan="2">3차</th><th>재질</th><th>외경</th></tr><tr><th>mm</th><th>mm</th><th>mm</th><th>-</th><th>kg/km</th><th>Kv</th><th>kg/km</th></tr></thead><tbody><tr><td>5C-FBT</td><td>1.05</td><td>발포PE</td><td>5</td><td>알루미늄마일라테이프</td><td>주석도금연동선편조</td><td>알루미늄마일라테이프</td><td>비닐</td><td>7.4</td><td>7.4 +/- 0.5</td><td>55</td></tr><tr><td>7C-FBT</td><td>1.5</td><td>발포PE</td><td>7.3</td><td>알루미늄마일라테이프</td><td>주석도금연동선편조</td><td>알루미늄마일라테이프</td><td>비닐</td><td>10</td><td>10.0 +/- 0.5</td><td>100</td></tr><tr><td>5C-HFBT</td><td>1.2</td><td>고발포PE</td><td>5</td><td>알루미늄마일라테이프</td><td>주석도금연동선편조</td><td>알루미늄마일라테이프</td><td>비닐</td><td>7.4</td><td>7.4 +/- 0.5</td><td>56</td></tr><tr><td>7C-HFBT</td><td>1.8</td><td>고발포PE</td><td>7.3</td><td>알루미늄마일라테이프</td><td>주석도금연동선편조</td><td>알루미늄마일라테이프</td><td>비닐</td><td>10</td><td>10.0 +/- 0.5</td><td>102</td></tr><tr><td>10-HFBT</td><td>2.4</td><td>고발포PE</td><td>9.4</td><td>알루미늄마일라테이프</td><td>주석도금연동선편조</td><td>알루미늄마일라테이프</td><td>비닐</td><td>12.3</td><td>12.3 +/- 0.5</td><td>144</td></tr><tr><td>RG-6/U/T</td><td>1.02</td><td>고발포PE</td><td>4.57</td><td>알루미늄마일라테이프</td><td>주석도금연동선편조</td><td>알루미늄마일라테이프</td><td>비닐</td><td>6.95</td><td>6.95 +/- 0.5</td><td>42</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>CPEV</h1>
					<table class="table table-bordered"><thead><tr><th>도체지름</th><th>쌍수</th><th>절연두께</th><th>시스두께</th><th>완성품외경</th></tr><tr><th>mm</th><th>p</th><th>mm</th><th>mm</th><th>mm</th></tr></thead><tbody><tr><td>0.5</td><td>5</td><td>0</td><td>2</td><td>10</td></tr><tr><td>0.5</td><td>10</td><td>0</td><td>2</td><td>12</td></tr><tr><td>0.5</td><td>15</td><td>0</td><td>2</td><td>13</td></tr><tr><td>0.5</td><td>20</td><td>0</td><td>2</td><td>14</td></tr><tr><td>0.5</td><td>25</td><td>0</td><td>2</td><td>15</td></tr><tr><td>0.5</td><td>30</td><td>0</td><td>2</td><td>16</td></tr><tr><td>0.5</td><td>35</td><td>0</td><td>2</td><td>20</td></tr><tr><td>0.5</td><td>50</td><td>0</td><td>2</td><td>26</td></tr><tr><td>0.5</td><td>100</td><td>0</td><td>2</td><td>36</td></tr><tr><td>0.5</td><td>200</td><td>0</td><td>2</td><td>11</td></tr><tr><td>0.65</td><td>5</td><td>0</td><td>2</td><td>13</td></tr><tr><td>0.65</td><td>10</td><td>0</td><td>2</td><td>14</td></tr><tr><td>0.65</td><td>15</td><td>0</td><td>2</td><td>16</td></tr><tr><td>0.65</td><td>20</td><td>0</td><td>2</td><td>17</td></tr><tr><td>0.65</td><td>25</td><td>0</td><td>2</td><td>19</td></tr><tr><td>0.65</td><td>30</td><td>0</td><td>2</td><td>23</td></tr><tr><td>0.65</td><td>50</td><td>0</td><td>2</td><td>30</td></tr><tr><td>0.65</td><td>100</td><td>0</td><td>2</td><td>41</td></tr><tr><td>0.65</td><td>200</td><td>0</td><td>2</td><td>12</td></tr><tr><td>0.9</td><td>5</td><td>0</td><td>2</td><td>15</td></tr><tr><td>0.9</td><td>10</td><td>0</td><td>2</td><td>18</td></tr><tr><td>0.9</td><td>15</td><td>0</td><td>2</td><td>20</td></tr><tr><td>0.9</td><td>20</td><td>0</td><td>2</td><td>22</td></tr><tr><td>0.9</td><td>25</td><td>0</td><td>2</td><td>24</td></tr><tr><td>0.9</td><td>30</td><td>0</td><td>2</td><td>29</td></tr><tr><td>0.9</td><td>100</td><td>0</td><td>2</td><td>40</td></tr><tr><td>0.9</td><td>200</td><td>0</td><td>2</td><td>56</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>EXC</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">규격</th><th colspan="2">도체</th><th colspan="2">절연</th><th colspan="4">외부도체</th><th rowspan="2">시스두께</th><th rowspan="2">완성품외경</th><th rowspan="2">도체저항</th><th rowspan="2">시험전압</th><th rowspan="2">정전용량</th><th rowspan="2">표준감쇄랑</th><th rowspan="2">개산중량</th></tr><tr><th>소선수/소선지름</th><th>바깥지름</th><th>두께</th><th>바깥지름</th><th>소선지름</th><th>지수</th><th>타수</th><th>외경</th></tr><tr><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th></th><th></th><th>(kg/km)</th></tr></thead><tbody><tr><td>75Ω 형</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3C-2V</td><td>1/0.50</td><td>0.5</td><td>1.3</td><td>3.1</td><td>0.14</td><td>5</td><td>24</td><td>3.8</td><td>0.8</td><td>5.4</td><td>91.4</td><td>1000</td><td>67 +/- 3</td><td>42</td><td>42</td></tr><tr><td>5C-2V</td><td>1/0.80</td><td>2.05</td><td>2.05</td><td>4.9</td><td>0.14</td><td>7</td><td>24</td><td>5.6</td><td>0.9</td><td>5.7</td><td>35.9</td><td>1000</td><td>67 +/- 3</td><td>27</td><td>74</td></tr><tr><td>7C-2V</td><td>7/0.40</td><td>1.2</td><td>3.05</td><td>7.3</td><td>0.18</td><td>8</td><td>24</td><td>8.2</td><td>1.1</td><td>10.4</td><td>20.7</td><td>1000</td><td>67 +/- 3</td><td>22</td><td>140</td></tr><tr><td>10C-2V</td><td>7/0.50</td><td>1.5</td><td>3.95</td><td>9.4</td><td>0.2</td><td>10</td><td>24</td><td>10.4</td><td>1.3</td><td>13</td><td>13.1</td><td>1000</td><td>67 +/- 3</td><td>18</td><td>220</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>채널 성능(규격) - UTP CAT.7</h1>
					<table class="table table-bordered"><thead><tr><th>주파수</th><th>감쇄량</th><th>근단누화</th><th>근단누화<br>전력합</th><th>원단누화</th><th>원단누화<br>전력합</th><th>반사손실</th><th>전달지연</th></tr><tr><th>(MHz)</th><th>(dB / 100m)</th><th>(db)</th><th>(db)</th><th>(db / 100m)</th><th>(db / 100m)</th><th>(db)</th><th>(ns /100m)</th></tr></thead><tbody><tr><td>4</td><td>3.7</td><td>78</td><td>75</td><td>78</td><td>75</td><td>23</td><td>552</td></tr><tr><td>8</td><td>5.2</td><td>78</td><td>75</td><td>75.9</td><td>72.9</td><td>24.5</td><td>547</td></tr><tr><td>10</td><td>5.9</td><td>78</td><td>75</td><td>74</td><td>71</td><td>25</td><td>545</td></tr><tr><td>16</td><td>7.4</td><td>78</td><td>75</td><td>69</td><td>66.9</td><td>25</td><td>543</td></tr><tr><td>20</td><td>8.3</td><td>78</td><td>75</td><td>68</td><td>65</td><td>25</td><td>542</td></tr><tr><td>25</td><td>9.3</td><td>78</td><td>75</td><td>66</td><td>63</td><td>24.3</td><td>541</td></tr><tr><td>31.25</td><td>10.4</td><td>78</td><td>75</td><td>64.1</td><td>61.1</td><td>23.6</td><td>540</td></tr><tr><td>62.5</td><td>14.9</td><td>75.5</td><td>72.5</td><td>58.1</td><td>55.1</td><td>21.5</td><td>539</td></tr><tr><td>100</td><td>19</td><td>72.4</td><td>69.4</td><td>54</td><td>51</td><td>20.1</td><td>538</td></tr><tr><td>200</td><td>27.5</td><td>67.9</td><td>64.9</td><td>48</td><td>45</td><td>18</td><td>537</td></tr><tr><td>400</td><td>40</td><td>63.4</td><td>60.4</td><td>42</td><td>39</td><td>17.3</td><td>536</td></tr><tr><td>600</td><td>50.1</td><td>60.7</td><td>57.7</td><td>38.4</td><td>35.4</td><td>17.3</td><td>535</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>채널 성능(규격) - UTP CAT.6A</h1>
					<table class="table table-bordered"><thead><tr><th>주파수</th><th>감쇄량</th><th>근단누화</th><th>근단누화<br>전력합</th><th>원단누화</th><th>원단누화<br>전력합</th><th>반사손실</th><th>외부근단누화<br>전력합</th><th>외부원단누화<br>전력합</th></tr><tr><th>(MHz)</th><th>(dB / 100m)</th><th>(db)</th><th>(db)</th><th>(db / 100m)</th><th>(db / 100m)</th><th>(db)</th><th>(db / 100m)</th><th>(db / 100m)</th></tr></thead><tbody><tr><td>1</td><td>2.3</td><td>65</td><td>62</td><td>63.3</td><td>60.3</td><td>19</td><td>80</td><td>67</td></tr><tr><td>4</td><td>4.2</td><td>63</td><td>60.5</td><td>51.2</td><td>48.2</td><td>19</td><td>74</td><td>65</td></tr><tr><td>8</td><td>5.8</td><td>58.2</td><td>55.6</td><td>45.2</td><td>42.2</td><td>19</td><td>71</td><td>59</td></tr><tr><td>10</td><td>6.5</td><td>56.6</td><td>54</td><td>43.3</td><td>40.3</td><td>19</td><td>70</td><td>57</td></tr><tr><td>16</td><td>8.2</td><td>53.2</td><td>50.6</td><td>39.2</td><td>36.2</td><td>18</td><td>68</td><td>53</td></tr><tr><td>20</td><td>9.2</td><td>51.6</td><td>49</td><td>37.2</td><td>34.2</td><td>17.5</td><td>67</td><td>51</td></tr><tr><td>25</td><td>10.2</td><td>50</td><td>47.3</td><td>35.3</td><td>32.3</td><td>217</td><td>66</td><td>49</td></tr><tr><td>31</td><td>11.5</td><td>48.4</td><td>45.7</td><td>33.4</td><td>30.4</td><td>16.5</td><td>65.1</td><td>47</td></tr><tr><td>62</td><td>16.4</td><td>43.4</td><td>40.6</td><td>27.3</td><td>24.3</td><td>14</td><td>62</td><td>41</td></tr><tr><td>100</td><td>20.9</td><td>39.9</td><td>37.1</td><td>23.3</td><td>20.3</td><td>12</td><td>60</td><td>37</td></tr><tr><td>200</td><td>30.1</td><td>34.8</td><td>31.9</td><td>17.2</td><td>14.2</td><td>9</td><td>55.5</td><td>31</td></tr><tr><td>400</td><td>43.7</td><td>28.7</td><td>25.8</td><td>11.2</td><td>8.2</td><td>6</td><td>51</td><td>25</td></tr><tr><td>600</td><td>49.3</td><td>26.1</td><td>23.2</td><td>9.3</td><td>6.3</td><td>6</td><td>49.5</td><td>23</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>채널 성능(규격) - UTP CAT.6</h1>
					<table class="table table-bordered"><thead><tr><th>주파수</th><th>감쇄량</th><th>근단누화</th><th>근단누화<br>전력합</th><th>원단누화</th><th>원단누화<br>전력합</th><th>반사손실</th></tr><tr><th>(MHz)</th><th>(dB / 100m)</th><th>(db)</th><th>(db)</th><th>(db / 100m)</th><th>(db / 100m)</th><th>(db)</th></tr></thead><tbody><tr><td>1</td><td>2.1</td><td>65</td><td>62</td><td>63.3</td><td>60.3</td><td>19</td></tr><tr><td>4</td><td>4</td><td>63</td><td>60.5</td><td>51.2</td><td>48.2</td><td>19</td></tr><tr><td>8</td><td>5.7</td><td>58.2</td><td>55.6</td><td>45.2</td><td>42.2</td><td>19</td></tr><tr><td>10</td><td>6.3</td><td>56.6</td><td>54</td><td>43.3</td><td>40.3</td><td>19</td></tr><tr><td>16</td><td>8</td><td>53.2</td><td>50.6</td><td>39.2</td><td>36.2</td><td>18</td></tr><tr><td>20</td><td>9</td><td>51.6</td><td>49</td><td>37.2</td><td>34.2</td><td>18</td></tr><tr><td>25</td><td>10.1</td><td>50</td><td>47.3</td><td>35.3</td><td>32.3</td><td>17</td></tr><tr><td>31</td><td>11.4</td><td>48.4</td><td>45.7</td><td>33.4</td><td>30.4</td><td>17</td></tr><tr><td>62</td><td>16.5</td><td>43.4</td><td>40.6</td><td>27.3</td><td>24.3</td><td>14</td></tr><tr><td>100</td><td>21.3</td><td>39.9</td><td>37.1</td><td>23.3</td><td>20.3</td><td>12</td></tr><tr><td>200</td><td>31.5</td><td>34.8</td><td>31.9</td><td>17.2</td><td>14.2</td><td>9</td></tr><tr><td>250</td><td>35.9</td><td>33.1</td><td>30.2</td><td>15.3</td><td>12.3</td><td>8</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>채널 성능(규격) - UTP CAT.5e</h1>
					<table class="table table-bordered"><thead><tr><th>주파수</th><th>감쇄량</th><th>근단누화</th><th>근단누화<br>전력합</th><th>원단누화</th><th>원단누화<br>전력합</th><th>반사손실</th></tr><tr><th>(MHz)</th><th>(dB / 100m)</th><th>(db)</th><th>(db)</th><th>(db / 100m)</th><th>(db / 100m)</th><th>(db)</th></tr></thead><tbody><tr><td>1</td><td>2.2</td><td>60</td><td>57</td><td>57.4</td><td>54.4</td><td>17</td></tr><tr><td>4</td><td>4.5</td><td>53.5</td><td>50.5</td><td>45.4</td><td>42.4</td><td>17</td></tr><tr><td>8</td><td>6.3</td><td>48.6</td><td>45.6</td><td>39.3</td><td>36.3</td><td>17</td></tr><tr><td>10</td><td>7.1</td><td>47</td><td>44</td><td>437.4</td><td>34.4</td><td>17</td></tr><tr><td>16</td><td>9.1</td><td>43.6</td><td>40.6</td><td>33.3</td><td>30.3</td><td>17</td></tr><tr><td>20</td><td>10.2</td><td>42</td><td>39</td><td>31.4</td><td>28.4</td><td>17</td></tr><tr><td>25</td><td>11.4</td><td>40.3</td><td>37.3</td><td>29.4</td><td>26.4</td><td>16</td></tr><tr><td>31</td><td>12.9</td><td>38.7</td><td>35.7</td><td>27.5</td><td>24.5</td><td>15</td></tr><tr><td>62</td><td>18.6</td><td>33.6</td><td>30.6</td><td>21.5</td><td>18.5</td><td>12</td></tr><tr><td>100</td><td>24</td><td>301</td><td>27.1</td><td>17.4</td><td>14.4</td><td>10</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6 / 1kV F-FR-8 - 단심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.4</td><td>8.5</td><td>12.1</td><td>3,500</td><td>60</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.4</td><td>9</td><td>7.41</td><td>3,500</td><td>80</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.4</td><td>8.5</td><td>4.61</td><td>3,500</td><td>100</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.4</td><td>10</td><td>3.08</td><td>3,500</td><td>120</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.4</td><td>11</td><td>1.83</td><td>3,500</td><td>180</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.4</td><td>12</td><td>1.15</td><td>3,500</td><td>220</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.4</td><td>13.5</td><td>0.727</td><td>3,500</td><td>320</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.4</td><td>15</td><td>0.524</td><td>3,500</td><td>430</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>1.4</td><td>16.5</td><td>0.387</td><td>3,500</td><td>540</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>1.5</td><td>18.5</td><td>0.268</td><td>3,500</td><td>740</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>1.5</td><td>20.5</td><td>0.193</td><td>3,500</td><td>990</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>1.6</td><td>22.5</td><td>0.153</td><td>3,500</td><td>1,230</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>1.7</td><td>25</td><td>0.124</td><td>3,500</td><td>1,530</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>1.7</td><td>27</td><td>0.0991</td><td>3,500</td><td>1,890</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>1.8</td><td>30</td><td>0.0754</td><td>3,500</td><td>2,450</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>1.9</td><td>33</td><td>0.0601</td><td>3,500</td><td>3,040</td></tr><tr><td>400</td><td>원형압축</td><td>23.2</td><td>2</td><td>2.0</td><td>36.5</td><td>0.047</td><td>3,500</td><td>3,860</td></tr><tr><td>500</td><td>원형압축</td><td>26.4</td><td>2.2</td><td>2.1</td><td>41</td><td>0.03666</td><td>3,500</td><td>4,920</td></tr><tr><td>630</td><td>원형압축</td><td>30.2</td><td>2.4</td><td>2.3</td><td>46</td><td>0.0283</td><td>3,500</td><td>6,320</td></tr></tbody></table>
					<h1>0.6 / 1kV F-FR-8 - 2심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.4</td><td>14</td><td>12.1</td><td>3,500</td><td>130</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.4</td><td>15</td><td>7.41</td><td>3,500</td><td>170</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.4</td><td>16</td><td>4.61</td><td>3,500</td><td>210</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.4</td><td>17.5</td><td>3.08</td><td>3,500</td><td>260</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.4</td><td>19.5</td><td>1.83</td><td>3,500</td><td>350</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.4</td><td>21</td><td>1.15</td><td>3,500</td><td>470</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.4</td><td>24.5</td><td>0.727</td><td>3,500</td><td>680</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.4</td><td>26.5</td><td>0.524</td><td>3,500</td><td>910</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>1.4</td><td>30</td><td>0.387</td><td>3,500</td><td>1,180</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>1.5</td><td>34.5</td><td>0.268</td><td>3,500</td><td>1,640</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>1.5</td><td>38</td><td>0.193</td><td>3,500</td><td>2,210</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>1.6</td><td>42</td><td>0.153</td><td>3,500</td><td>2,710</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>1.7</td><td>46.5</td><td>0.124</td><td>3,500</td><td>3,390</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>1.7</td><td>51</td><td>0.0991</td><td>3,500</td><td>4,200</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>1.8</td><td>57.5</td><td>0.0754</td><td>3,500</td><td>5,440</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>1.9</td><td>63</td><td>0.0601</td><td>3,500</td><td>6,740</td></tr></tbody></table>
					<h1>0.6 / 1kV F-FR-8 - 3심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.8</td><td>15</td><td>12.1</td><td>3,500</td><td>170</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.8</td><td>16</td><td>7.41</td><td>3,500</td><td>200</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>270</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>340</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.8</td><td>20.5</td><td>1.83</td><td>3,500</td><td>470</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.8</td><td>22</td><td>1.15</td><td>3,500</td><td>640</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.8</td><td>26</td><td>0.727</td><td>3,500</td><td>930</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.8</td><td>28.5</td><td>0.524</td><td>3,500</td><td>1,250</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>1.9</td><td>32</td><td>0.387</td><td>3,500</td><td>1,600</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>2</td><td>37</td><td>0.268</td><td>3,500</td><td>2,240</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>2.1</td><td>41</td><td>0.193</td><td>3,500</td><td>3,020</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>2.3</td><td>45.5</td><td>0.153</td><td>3,500</td><td>3,850</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>2.4</td><td>50.5</td><td>0.124</td><td>3,500</td><td>4,790</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>2.6</td><td>55.5</td><td>0.0991</td><td>3,500</td><td>5,960</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>2.8</td><td>62</td><td>0.0754</td><td>3,500</td><td>7,730</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>2.9</td><td>68</td><td>0.0601</td><td>3,500</td><td>9,570</td></tr></tbody></table>
					<h1>0.6 / 1kV F-FR-8 - 4심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.8</td><td>16</td><td>12.1</td><td>3,500</td><td>190</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.8</td><td>17</td><td>7.41</td><td>3,500</td><td>250</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>330</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.8</td><td>20</td><td>3.08</td><td>3,500</td><td>420</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.8</td><td>22.5</td><td>1.83</td><td>3,500</td><td>600</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.8</td><td>24.5</td><td>1.15</td><td>3,500</td><td>820</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.8</td><td>28.5</td><td>0.727</td><td>3,500</td><td>1,220</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.8</td><td>31.5</td><td>0.524</td><td>3,500</td><td>1,600</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>2</td><td>35.5</td><td>0.387</td><td>3,500</td><td>2,110</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>2.1</td><td>41</td><td>0.268</td><td>3,500</td><td>2,990</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>2.3</td><td>45.5</td><td>0.193</td><td>3,500</td><td>4,040</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>2.4</td><td>50.5</td><td>0.153</td><td>3,500</td><td>5,050</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>2.6</td><td>56</td><td>0.124</td><td>3,500</td><td>6,280</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>2.7</td><td>61.5</td><td>0.0991</td><td>3,500</td><td>7,830</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>3</td><td>69</td><td>0.0754</td><td>3,500</td><td>10,160</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>3.2</td><td>76</td><td>0.0601</td><td>3,500</td><td>12,600</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>0.6/1kV NFR-8 - 단심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.4</td><td>8.5</td><td>12.1</td><td>3,500</td><td>60</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.4</td><td>9</td><td>7.41</td><td>3,500</td><td>80</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.4</td><td>8.5</td><td>4.61</td><td>3,500</td><td>100</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.4</td><td>10</td><td>3.08</td><td>3,500</td><td>120</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.4</td><td>11</td><td>1.83</td><td>3,500</td><td>180</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.4</td><td>12</td><td>1.15</td><td>3,500</td><td>220</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.4</td><td>13.5</td><td>0.727</td><td>3,500</td><td>320</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.4</td><td>15</td><td>0.524</td><td>3,500</td><td>430</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>1.4</td><td>16.5</td><td>0.387</td><td>3,500</td><td>540</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>1.5</td><td>18.5</td><td>0.268</td><td>3,500</td><td>740</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>1.5</td><td>20.5</td><td>0.193</td><td>3,500</td><td>990</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>1.6</td><td>22.5</td><td>0.153</td><td>3,500</td><td>1,230</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>1.7</td><td>25</td><td>0.124</td><td>3,500</td><td>1,530</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>1.7</td><td>27</td><td>0.0991</td><td>3,500</td><td>1,890</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>1.8</td><td>30</td><td>0.0754</td><td>3,500</td><td>2,450</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>1.9</td><td>33</td><td>0.0601</td><td>3,500</td><td>3,040</td></tr><tr><td>400</td><td>원형압축</td><td>23.2</td><td>2</td><td>2.0</td><td>36.5</td><td>0.047</td><td>3,500</td><td>3,860</td></tr><tr><td>500</td><td>원형압축</td><td>26.4</td><td>2.2</td><td>2.1</td><td>41</td><td>0.03666</td><td>3,500</td><td>4,920</td></tr><tr><td>630</td><td>원형압축</td><td>30.2</td><td>2.4</td><td>2.3</td><td>46</td><td>0.0283</td><td>3,500</td><td>6,320</td></tr></tbody></table>
					<h1>0.6/1kV NFR-8 - 2심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.4</td><td>14</td><td>12.1</td><td>3,500</td><td>130</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.4</td><td>15</td><td>7.41</td><td>3,500</td><td>170</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.4</td><td>16</td><td>4.61</td><td>3,500</td><td>210</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.4</td><td>17.5</td><td>3.08</td><td>3,500</td><td>260</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.4</td><td>19.5</td><td>1.83</td><td>3,500</td><td>350</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.4</td><td>21</td><td>1.15</td><td>3,500</td><td>470</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.4</td><td>24.5</td><td>0.727</td><td>3,500</td><td>680</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.4</td><td>26.5</td><td>0.524</td><td>3,500</td><td>910</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>1.4</td><td>30</td><td>0.387</td><td>3,500</td><td>1,180</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>1.5</td><td>34.5</td><td>0.268</td><td>3,500</td><td>1,640</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>1.5</td><td>38</td><td>0.193</td><td>3,500</td><td>2,210</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>1.6</td><td>42</td><td>0.153</td><td>3,500</td><td>2,710</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>1.7</td><td>46.5</td><td>0.124</td><td>3,500</td><td>3,390</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>1.7</td><td>51</td><td>0.0991</td><td>3,500</td><td>4,200</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>1.8</td><td>57.5</td><td>0.0754</td><td>3,500</td><td>5,440</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>1.9</td><td>63</td><td>0.0601</td><td>3,500</td><td>6,740</td></tr></tbody></table>
					<h1>0.6/1kV NFR-8 - 3심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.8</td><td>15</td><td>12.1</td><td>3,500</td><td>170</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.8</td><td>16</td><td>7.41</td><td>3,500</td><td>200</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.8</td><td>17</td><td>4.61</td><td>3,500</td><td>270</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.8</td><td>18.5</td><td>3.08</td><td>3,500</td><td>340</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.8</td><td>20.5</td><td>1.83</td><td>3,500</td><td>470</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.8</td><td>22</td><td>1.15</td><td>3,500</td><td>640</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.8</td><td>26</td><td>0.727</td><td>3,500</td><td>930</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.8</td><td>28.5</td><td>0.524</td><td>3,500</td><td>1,250</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>1.9</td><td>32</td><td>0.387</td><td>3,500</td><td>1,600</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>2</td><td>37</td><td>0.268</td><td>3,500</td><td>2,240</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>2.1</td><td>41</td><td>0.193</td><td>3,500</td><td>3,020</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>2.3</td><td>45.5</td><td>0.153</td><td>3,500</td><td>3,850</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>2.4</td><td>50.5</td><td>0.124</td><td>3,500</td><td>4,790</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>2.6</td><td>55.5</td><td>0.0991</td><td>3,500</td><td>5,960</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>2.8</td><td>62</td><td>0.0754</td><td>3,500</td><td>7,730</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>2.9</td><td>68</td><td>0.0601</td><td>3,500</td><td>9,570</td></tr></tbody></table>
					<h1>0.6/1kV NFR-8 - 4심</h1>
					<table class="table table-bordered"><thead><tr><th colspan="3">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항 20℃</th><th rowspan="2">시험전압</th><th rowspan="2">개산 무게</th></tr><tr><th>공칭 단면적</th><th>소선수/소선지름</th><th>외경</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>(kg/km)</th></tr></thead><tbody><tr><td>1.5</td><td>7/0.53</td><td>1.59</td><td>0.7</td><td>1.8</td><td>16</td><td>12.1</td><td>3,500</td><td>190</td></tr><tr><td>2.5</td><td>7/0.67</td><td>2.01</td><td>0.7</td><td>1.8</td><td>17</td><td>7.41</td><td>3,500</td><td>250</td></tr><tr><td>4</td><td>7/0.85</td><td>2.55</td><td>0.7</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>330</td></tr><tr><td>6</td><td>7/1.04</td><td>3.12</td><td>0.7</td><td>1.8</td><td>20</td><td>3.08</td><td>3,500</td><td>420</td></tr><tr><td>10</td><td>7/1.35</td><td>4.05</td><td>0.7</td><td>1.8</td><td>22.5</td><td>1.83</td><td>3,500</td><td>600</td></tr><tr><td>16</td><td>원형압축</td><td>4.7</td><td>0.7</td><td>1.8</td><td>24.5</td><td>1.15</td><td>3,500</td><td>820</td></tr><tr><td>25</td><td>원형압축</td><td>5.9</td><td>0.9</td><td>1.8</td><td>28.5</td><td>0.727</td><td>3,500</td><td>1,220</td></tr><tr><td>35</td><td>원형압축</td><td>6.9</td><td>0.9</td><td>1.8</td><td>31.5</td><td>0.524</td><td>3,500</td><td>1,600</td></tr><tr><td>50</td><td>원형압축</td><td>8.1</td><td>1</td><td>2</td><td>35.5</td><td>0.387</td><td>3,500</td><td>2,110</td></tr><tr><td>70</td><td>원형압축</td><td>9.8</td><td>1.1</td><td>2.1</td><td>41</td><td>0.268</td><td>3,500</td><td>2,990</td></tr><tr><td>95</td><td>원형압축</td><td>11.4</td><td>1.1</td><td>2.3</td><td>45.5</td><td>0.193</td><td>3,500</td><td>4,040</td></tr><tr><td>120</td><td>원형압축</td><td>12.9</td><td>1.2</td><td>2.4</td><td>50.5</td><td>0.153</td><td>3,500</td><td>5,050</td></tr><tr><td>150</td><td>원형압축</td><td>14.4</td><td>1.4</td><td>2.6</td><td>56</td><td>0.124</td><td>3,500</td><td>6,280</td></tr><tr><td>185</td><td>원형압축</td><td>15.9</td><td>1.6</td><td>2.7</td><td>61.5</td><td>0.0991</td><td>3,500</td><td>7,830</td></tr><tr><td>240</td><td>원형압축</td><td>18.3</td><td>1.7</td><td>3</td><td>69</td><td>0.0754</td><td>3,500</td><td>10,160</td></tr><tr><td>300</td><td>원형압축</td><td>20.5</td><td>1.8</td><td>3.2</td><td>76</td><td>0.0601</td><td>3,500</td><td>12,600</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>F-FR-3 (1등급 단선)</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="2">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</td><th>소선 구성</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="3">2</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>140</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>170</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>13</td><td>4.61</td><td>3,500</td><td>210</td></tr><tr><td rowspan="3">3</td><td>1.5</td><td>1.1.38</td><td>0.7</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>160</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>210</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>13.5</td><td>4.61</td><td>3,500</td><td>260</td></tr><tr><td rowspan="3">4</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>12</td><td>12.1</td><td>3,500</td><td>200</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>13</td><td>7.41</td><td>3,500</td><td>250</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>320</td></tr><tr><td rowspan="3">5</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>13</td><td>12.1</td><td>3,500</td><td>230</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>14</td><td>7.41</td><td>3,500</td><td>290</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>15.5</td><td>4.61</td><td>3,500</td><td>390</td></tr><tr><td rowspan="3">6</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>14</td><td>12.1</td><td>3,500</td><td>260</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>15</td><td>7.41</td><td>3,500</td><td>340</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>16.5</td><td>4.61</td><td>3,500</td><td>450</td></tr><tr><td rowspan="3">7</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>14</td><td>12.1</td><td>3,500</td><td>280</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>15</td><td>7.41</td><td>3,500</td><td>360</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>16.5</td><td>4.61</td><td>3,500</td><td>490</td></tr><tr><td rowspan="3">8</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>15</td><td>12.1</td><td>3,500</td><td>320</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>420</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>560</td></tr><tr><td rowspan="3">10</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>17</td><td>12.1</td><td>3,500</td><td>380</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>18.5</td><td>7.41</td><td>3,500</td><td>500</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>20.5</td><td>4.61</td><td>3,500</td><td>690</td></tr><tr><td rowspan="3">12</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>17.5</td><td>12.1</td><td>3,500</td><td>430</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>19</td><td>7.41</td><td>3,500</td><td>570</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>21</td><td>4.61</td><td>3,500</td><td>780</td></tr><tr><td rowspan="3">15</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>19</td><td>12.1</td><td>3,500</td><td>510</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>20.5</td><td>7.41</td><td>3,500</td><td>690</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>950</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>20.5</td><td>12.1</td><td>3,500</td><td>650</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>23</td><td>7.41</td><td>3,500</td><td>880</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>25.5</td><td>4.61</td><td>3,500</td><td>1,230</td></tr><tr><td rowspan="3">30</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>24</td><td>12.1</td><td>3,500</td><td>910</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>26.5</td><td>7.41</td><td>3,500</td><td>1,250</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>29.5</td><td>4.61</td><td>3,500</td><td>1,250</td></tr></table>
					<h1>F-FR-3 (2등급 연선)</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th>절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th><th></th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="3">2</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>140</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>170</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>13.5</td><td>4.61</td><td>3,500</td><td>220</td></tr><tr><td rowspan="3">3</td><td>1.5</td><td>1.1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>12</td><td>12.1</td><td>3,500</td><td>170</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>13</td><td>7.41</td><td>3,500</td><td>210</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>14</td><td>4.61</td><td>3,500</td><td>270</td></tr><tr><td rowspan="3">4</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>200</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>260</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>15</td><td>4.61</td><td>3,500</td><td>330</td></tr><tr><td rowspan="3">5</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>240</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>300</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>400</td></tr><tr><td rowspan="3">6</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>300</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>16</td><td>7.41</td><td>3,500</td><td>350</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>14.8</td><td>4.61</td><td>3,500</td><td>460</td></tr><tr><td rowspan="3">7</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>290</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>16</td><td>7.41</td><td>3,500</td><td>380</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>17.5</td><td>4.61</td><td>3,500</td><td>500</td></tr><tr><td rowspan="3">8</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>16</td><td>12.1</td><td>3,500</td><td>330</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>17.5</td><td>7.41</td><td>3,500</td><td>430</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>19</td><td>4.61</td><td>3,500</td><td>580</td></tr><tr><td rowspan="3">10</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>17.5</td><td>12.1</td><td>3,500</td><td>400</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>19.5</td><td>7.41</td><td>3,500</td><td>520</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>21.5</td><td>4.61</td><td>3,500</td><td>710</td></tr><tr><td rowspan="3">12</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>450</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>590</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>22</td><td>4.61</td><td>3,500</td><td>810</td></tr><tr><td rowspan="3">15</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>20</td><td>12.1</td><td>3,500</td><td>540</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>710</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>24.5</td><td>4.61</td><td>3,500</td><td>980</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>680</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>910</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>27</td><td>4.61</td><td>3,500</td><td>1,260</td></tr><tr><td rowspan="3">30</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>25</td><td>12.1</td><td>3,500</td><td>1,090</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>28</td><td>7.41</td><td>3,500</td><td>1,290</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>31.5</td><td>4.61</td><td>3,500</td><td>1,800</td></tr></tbody></table>
				`,
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
				descSrc: `
					<h1>NFR-3 (1등급 단선)</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="2">도체</th><th rowspan="2">절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</td><th>소선 구성</th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="3">2</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>11</td><td>12.1</td><td>3,500</td><td>140</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>170</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>13</td><td>4.61</td><td>3,500</td><td>210</td></tr><tr><td rowspan="3">3</td><td>1.5</td><td>1.1.38</td><td>0.7</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>160</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>12.5</td><td>7.41</td><td>3,500</td><td>210</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>13.5</td><td>4.61</td><td>3,500</td><td>260</td></tr><tr><td rowspan="3">4</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>12</td><td>12.1</td><td>3,500</td><td>200</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>13</td><td>7.41</td><td>3,500</td><td>250</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>14.5</td><td>4.61</td><td>3,500</td><td>320</td></tr><tr><td rowspan="3">5</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>13</td><td>12.1</td><td>3,500</td><td>230</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>14</td><td>7.41</td><td>3,500</td><td>290</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>15.5</td><td>4.61</td><td>3,500</td><td>390</td></tr><tr><td rowspan="3">6</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>14</td><td>12.1</td><td>3,500</td><td>260</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>15</td><td>7.41</td><td>3,500</td><td>340</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>16.5</td><td>4.61</td><td>3,500</td><td>450</td></tr><tr><td rowspan="3">7</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>14</td><td>12.1</td><td>3,500</td><td>280</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>15</td><td>7.41</td><td>3,500</td><td>360</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>16.5</td><td>4.61</td><td>3,500</td><td>490</td></tr><tr><td rowspan="3">8</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>15</td><td>12.1</td><td>3,500</td><td>320</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>16.5</td><td>7.41</td><td>3,500</td><td>420</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>18.5</td><td>4.61</td><td>3,500</td><td>560</td></tr><tr><td rowspan="3">10</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>17</td><td>12.1</td><td>3,500</td><td>380</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>18.5</td><td>7.41</td><td>3,500</td><td>500</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>20.5</td><td>4.61</td><td>3,500</td><td>690</td></tr><tr><td rowspan="3">12</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>17.5</td><td>12.1</td><td>3,500</td><td>430</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>19</td><td>7.41</td><td>3,500</td><td>570</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>21</td><td>4.61</td><td>3,500</td><td>780</td></tr><tr><td rowspan="3">15</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>19</td><td>12.1</td><td>3,500</td><td>510</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>20.5</td><td>7.41</td><td>3,500</td><td>690</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>23</td><td>4.61</td><td>3,500</td><td>950</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>20.5</td><td>12.1</td><td>3,500</td><td>650</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>23</td><td>7.41</td><td>3,500</td><td>880</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>25.5</td><td>4.61</td><td>3,500</td><td>1,230</td></tr><tr><td rowspan="3">30</td><td>1.5</td><td>1/1.38</td><td>0.7</td><td>1.8</td><td>24</td><td>12.1</td><td>3,500</td><td>910</td></tr><tr><td>2.5</td><td>1/1.78</td><td>0.7</td><td>1.8</td><td>26.5</td><td>7.41</td><td>3,500</td><td>1,250</td></tr><tr><td>4</td><td>1/2.25</td><td>0.7</td><td>1.8</td><td>29.5</td><td>4.61</td><td>3,500</td><td>1,250</td></tr></table>
					<h1>NFR-3 (2등급 연선)</h1>
					<table class="table table-bordered"><thead><tr><th rowspan="3">선심수</th><th colspan="3">도체</th><th>절연 두께</th><th rowspan="2">시스 두께</th><th rowspan="2">완성품 외경</th><th rowspan="2">도체 저항</th><th rowspan="2">시험 전압</th><th rowspan="2">개산 중량</th></tr><tr><th>공칭 단면적</th><th>소선 구성</th><th>외경</th><th></th></tr><tr><th>mm2</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>mm</th><th>Ω/㎞</th><th>V</th><th>kg/km</th></tr></thead><tbody><tr><td rowspan="3">2</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>11.5</td><td>12.1</td><td>3,500</td><td>140</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>12</td><td>7.41</td><td>3,500</td><td>170</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>13.5</td><td>4.61</td><td>3,500</td><td>220</td></tr><tr><td rowspan="3">3</td><td>1.5</td><td>1.1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>12</td><td>12.1</td><td>3,500</td><td>170</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>13</td><td>7.41</td><td>3,500</td><td>210</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>14</td><td>4.61</td><td>3,500</td><td>270</td></tr><tr><td rowspan="3">4</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>12.5</td><td>12.1</td><td>3,500</td><td>200</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>13.5</td><td>7.41</td><td>3,500</td><td>260</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>15</td><td>4.61</td><td>3,500</td><td>330</td></tr><tr><td rowspan="3">5</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>13.5</td><td>12.1</td><td>3,500</td><td>240</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>14.5</td><td>7.41</td><td>3,500</td><td>300</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>16</td><td>4.61</td><td>3,500</td><td>400</td></tr><tr><td rowspan="3">6</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>300</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>16</td><td>7.41</td><td>3,500</td><td>350</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>14.8</td><td>4.61</td><td>3,500</td><td>460</td></tr><tr><td rowspan="3">7</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>14.5</td><td>12.1</td><td>3,500</td><td>290</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>16</td><td>7.41</td><td>3,500</td><td>380</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>17.5</td><td>4.61</td><td>3,500</td><td>500</td></tr><tr><td rowspan="3">8</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>16</td><td>12.1</td><td>3,500</td><td>330</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>17.5</td><td>7.41</td><td>3,500</td><td>430</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>19</td><td>4.61</td><td>3,500</td><td>580</td></tr><tr><td rowspan="3">10</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>17.5</td><td>12.1</td><td>3,500</td><td>400</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>19.5</td><td>7.41</td><td>3,500</td><td>520</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>21.5</td><td>4.61</td><td>3,500</td><td>710</td></tr><tr><td rowspan="3">12</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>18</td><td>12.1</td><td>3,500</td><td>450</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>20</td><td>7.41</td><td>3,500</td><td>590</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>22</td><td>4.61</td><td>3,500</td><td>810</td></tr><tr><td rowspan="3">15</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>20</td><td>12.1</td><td>3,500</td><td>540</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>22</td><td>7.41</td><td>3,500</td><td>710</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>24.5</td><td>4.61</td><td>3,500</td><td>980</td></tr><tr><td rowspan="3">20</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>22</td><td>12.1</td><td>3,500</td><td>680</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>24</td><td>7.41</td><td>3,500</td><td>910</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>27</td><td>4.61</td><td>3,500</td><td>1,260</td></tr><tr><td rowspan="3">30</td><td>1.5</td><td>1/1.38</td><td>1.59</td><td>0.7</td><td>1.8</td><td>25</td><td>12.1</td><td>3,500</td><td>1,090</td></tr><tr><td>2.5</td><td>1/1.78</td><td>2.01</td><td>0.7</td><td>1.8</td><td>28</td><td>7.41</td><td>3,500</td><td>1,290</td></tr><tr><td>4</td><td>1/2.25</td><td>2.55</td><td>0.7</td><td>1.8</td><td>31.5</td><td>4.61</td><td>3,500</td><td>1,800</td></tr></tbody></table>
				`,
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
