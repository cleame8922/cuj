let div = document.getElementById("msg");
let audio = document.getElementById("audio");

function control(e) {
	let id = e.target.id;
	
	if(id == "play") { //play 버튼 클릭
		audio.play(); //재생
		div.innerHTML = "재생중입니다.";
	} 
	
	else if (id == "pause") { //pause 버튼 클릭
		audio.pause();
		div.innerHTML = "일시중지되었습니다.";
	}
	
	else if (id == "replay") { //replay 버튼 클릭
		audio.load(); // src에 지정된 미디어 다시 로딩
		audio.play(); // 처음부터 다시 재생
		div.innerHTML = audio.src + "를 처음부터 재생합니다.";
	}
	
	else if (id == "vol-") { // vol- 버튼 클릭
		audio.volume -= 0.1; //음량 0.1 감소
		div.innerHTML = "음량 0.1감소." + "현재" + audio.volume;
	}
	
	else if (id == "vol+") { // vol+ 버튼 클릭
		audio.volume += 0.1; // 음량 0.1 증가
		if(audio.volume > 0.9) audio.volume = 1.0;
		div.innerHTML = "음량 0.1 증가." + "현재" + audio.volume;
	}
	
	else if (id == "mute on/off") { //mute on/off 버튼 클릭
		audio.muted = !audio.muted; //음소거 토글
		if(audio.muted) div.innerHTML = "음소거";
		else div.innerHTML = "음소거 해제";
	}
}