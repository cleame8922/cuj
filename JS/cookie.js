// expiredays는 일자 정수 - 365년 1년 쿠키

function setCookie(key, value, expiredays) {
	let todayDate = new Date ();
	todayDate.setDate(todayDate.getDate() + expiredays); //현재 시각 + 일 단위로 쿠키 만료 날짜 변경
	// todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000)); //밀리세컨드 단위로 쿠키 만료 날짜 변경
	document.cookie = key + "=" + escape(value) + "; path =/; expires = " + todayDate.toGMTString() + ";";
}

//쿠키 삭제
//쿠키는 삭제가 없어서 현재 시각으로 만료 처리를 함.

function delCookie(key) {
    let todayDate = new Date();
    document.cookie = key + "=; path=/; expires=" + todayDate.toGMTString() + ";" // 현재 시각 이전이면 쿠키가 만료되어 사라짐.
    alert('로그아웃 버튼 클릭 확인 : 쿠키를 삭제합니다.');
}


//쿠키읽기
function getCookie(key) {
	key = new RegExp (key + '=([^;]*)') //쿠키들을 세미콜론으로 구분하는 정규표현식 정의
	return key.test(document.cookie)?unescape(RegExp.$1):''; //인자로 받은 키에 해달하는 키가 있으면 참,거짓 값을 반환
}

//쿠키 체크 - 있으면 참, 없으면 거짓, getCookie()에 의존

function boolCheckCookie (key) {
	return getCookie (key) != ''?true : false;
}

//쿠키 체크 테스트 함수, getCookie()에 의존
function checkCookieTest(key) {
	let val = getCookie(key);
	if (val != "") {
		alert('현재 쿠키가 설정되어 있습니다.');
		return val;
	}
	else{
		val = prompt (key + "직접 쿠키의 값을 입력해주세요 : ","");
		if (val != "" && val != null) {
			alert('새로운 쿠키를 설정합니다.');
			setCookie (key, val, 365);
			return val;
		}
	}
}