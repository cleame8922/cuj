function form_check(){
	
	const str_id = document.getElementById("js_userid1"); // 폼 내부 id로 객체를 변수로 가져옴
	const str_pwd = document.getElementById("js_password1"); // 폼 내부 id로 객체를 변수로 가져옴
	
	const pwd_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/; // 패스워드 정규 표현식
	const email_check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; // 이메일 정규 표현식
	const blank_pattern = /[\s]/g; // 공백 정규 표현식

		
	const form = document.createElement('form'); // 폼 형태의 객체를 생성, 전송 할때 사용
	
	if((str_id.value=='') || (str_id.value==null)){ // 아이디 비었는지 체크
		alert("아이디를 입력하세요 제발!!");
		str_id.focus();
		return false;
	}
	
	if(!email_check.test(str_id.value)){ // 이메일 형식 체크
		alert("이메일@주소 형식으로 아이디를 입력하세요.");
		str_id.focus();
		return false;
	}
	if(str_pwd.value==''){ // 패스워드 비었는지 체크
		alert("비밀번호를 입력하세요 제발!!");
		str_pwd.focus();
		return false;
	}

	if(blank_pattern.test(str_id.value) == true){ // 아이디 공백만 입력 했는지 체크
    alert(' 공백만 입력되었습니다 ');
    return false;
	}
	
	if(!pwd_check.test(str_pwd.value)){ // 패스워드 형식 체크
		alert("비밀번호는 영문자 + 숫자 + 특수문자 조합, 10글자 이상 입력!");   
		str_pwd.focus();
		return false;
	}
	
	document.body.append(form); // 앞서 생성한 폼을 <body> 안에 삽입
	form.action = 'index_main.html'; // 폼 이동 대상 지정
	form.method = 'POST'; // 전송 방식 지정
	form.submit(); // 전송!
}
