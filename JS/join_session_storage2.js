//세션 저장
function session_save() {
	// Check if the sessionStorage object exists
	if(sessionStorage) {
		// Store data
		let input_text = document.getElementById("js_joinid");
		sessionStorage.setItem("Session_Storage1", input_text.value);
		
	}
	else {
		alert("세션 스토리지 지원 x");
	}
}

//세션 읽기
function session_get() {
	//Check if the sessionStorage object exists
	if(sessionStorage) {
		//Retrieve data
	}
}

//세션 삭제
function session_del() {
	//Check if the sessionStorage object existss
	if(sessionStorage) {
		//Retrieve data
		sessionStorage.removeItem("Session_Storage1");
		alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
	}
	else {
		alert("세션 스토리지 지원 x");
	}
}

//세션 체크 테스트 함수
function checkSessionTest(key) {
	let val = session_get(key);
	if (val != "") {
		alert('이미 존재하는 이메일입니다.');
		return val;
	}
}