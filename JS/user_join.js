function join_check(){
	const str_id1 = document.getElementById("js_joinid"); // 폼 내부 id로 객체를 변수로 가져옴
	const str_pwd1 = document.getElementById("js_password1"); //폼 내부 id로 객체를 변수로 가져옴
	const str_pwd2 = document.getElementById("js_password2"); //폼 내부 id로 객체를 변수로 가져옴
	
	const pwd_check = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/; // 패스워드 정규 표현식
	const email_check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규 표현식
	const blank_pattern = /[\s]/g; //공백 정규 표현식
	
	const form = document.createElement('form'); //폼형태의 객체를 생성, 전송할 때 사용
	
	if ((str_id1.value == "") || (str_id1.value == null)){ // 아이디가 비었는지 체크
		alert("아이디을 입력하세요. 제발!!");
		str_id.focus();
		return false;
	}
	
	if (!email_check.test(str_id1.value)){ //이메일 형식 체크
		alert("이메일 @주소 형식으로 아이디를 입력하세요.");
		str_id.focus();
		return false;
	}
	
	if ((str_pwd1.value == "") || (str_pwd1.value == null))  { //패스워드 비웠는지 체크
	   alert("비밀번호를 입력하세요. 제발!!");
	   str_pwd1.focus();
	   return false;
	}
	
	if ((str_pwd2.value == "") || (str_pwd2.value == null))  { //패스워드 비웠는지 체크
	   alert("비밀번호를 입력하세요. 제발!!");
	   str_pwd2.focus();
	   return false;
	}
	
	if(str_pwd1.value != str_pwd2.value) { // 패스워드 값 같은지 검사
		alert("잘못된 비밀번호입니다.");
		str_pwd1.focus;
		return false;
	}
	
	if (blank_pattern.test(str_pwd1.value || str_pwd2.value) == true){ // 패스워드를 입력했는지 체크
		alert('공백이 입력되었습니다.');
		return false;
	}
	
	if (!pwd_check.test(str_pwd1.value || str_pwd2.value)) { // 패스워드 형식 체크
		alert("비밀번호는 영문자 + 숫자 + 특수문자 조합, 8글자 이상 입력!");
		str_pwd1.focus();
		return false;
	}
	
	if(localStorage){
      if(localStorage.getItem("Local_Storage_test") == str_id1.value){
		 let input_text = document.getElementById("js_joinid");
         alert("이미 가입된 이메일입니다.");
         return false;
      }
   }
	
	alert(str_id1.value + "님 회원가입을 축하드립니다!");
	document.body.append(form); // 앞서 생성한 폼을 <body>안에 삽입
	localStorage.setItem("Local_Storage_test", str_id1.value);
	form.action = 'index.html'; //폼 이동 대상 지정
	form.method = 'POST'; //전송 방식 지정
	form.submit(); //전송

}