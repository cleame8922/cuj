function map_popup() {
	const keyword = document.getElementById("keyword1");
	
	const blank_pattern = /[\s]/g; //공백 정규 표현식
	const special = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g; // 툭수문자 정규표현식
	
	const form = document.createElement('form'); // 폼 형태의 객체를 생성, 전송 할때 사용
	
	if ((keyword.value == "") || (keyword.value == null)){ // 검색어가 비었는지 체크
	alert("검색어를 입력하세요. 제발!!");
	keyword.focus();
	return false;
	}
	
	if (blank_pattern.test(keyword.value) == true){ // 공백만 입력했는지 체크
		alert('공백만 입력되었습니다.');
		return false;
	}
	
	if (special.test(keyword.value) == true){ // 툭수문자만 입력했는지 체크
		alert('특수문자가 입력되었습니다.');
		return false;
	}
	
	document.body.append(form); // 앞서 생성한 폼을 <body> 안에 삽입
	form.action = 'https://map.kakao.com/link/search/' + keyword.value; // 폼 이동 대상 지정
	form.method = 'POST'; // 전송 방식 지정
	form.submit(); // 전송!
}
