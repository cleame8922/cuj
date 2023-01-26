//로컬 저장
function local_save() {
	//Check if the localStorage object exists
	if (localStorage) {
		//Store data
		let input_text = document.getElementById("local");
		localStorage.setItem("Local_Storage_test", input_text.value);
	}
	else {
		alert("로컬 스토리지 지원 x");
	}
}
	
	//로컬 읽기
	function local_get() {
		//Check if the localStorage object exists
		if (localStorage) {
			//Retrieve data
			alert("저장된 검색어는, " + localStorage.getItem("Local_Storage_test"));
		}
		else {
			alert("로컬 스토리지 지원 x");
		}
	}
	
	//로컬 삭제
	function local_del() {
    // Check if the localStorage object exists
    if (localStorage) {
        // Retrieve data
        localStorage.removeItem("Local_Storage_test");
        alert('로그아웃 버튼 클릭 확인 : 로컬 스토리지를 삭제합니다.');
    } else {
        alert("로컬 스토리지 지원 x");
    }
}