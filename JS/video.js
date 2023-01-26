let video = document.getElementById("video");
let videocontrol = document.getElementById("video");

video.onloadedmetadata = function f(e) {
	alert(video.videoWidth + "x" + video.videoHeight);
	video.width = video.videoWidth;
	video.height = video,videoHeight;
}

function play() {
	if (videocountrol.paused) videocontrol.play();
	else videocontrol.pause();
}

function big() { // 화면 크기 200씩 증가
	videocontrol.width += 200;
	videocontrol.height += 200;
}

function small() { // 화면 크기 200씩 감소
	videocontrol.width -= 200;
	videocontrol.height -= 200;
}