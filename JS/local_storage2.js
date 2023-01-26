const form = document.querySelector('form'); // 문서 내 첫번째 form 반환
const ul = document.querySelector('ul'); // 문서 내 첫번째 ul 반환, ul:
const input = document.getElementById('item'); // 텍스트 입력 창 id얻기
let itemsArray = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')) : []; // json 객체 문자열을 js객체로 변환 후 저장, 현재 비어있음

localStorage.setItem('items', JSON.stringify(itemsArray)); // 로컬 스토리지 저장, 배열 혀형식으로 저장
const data = JSON.parse(localStorage.getItem('items')); // 로컬 스토리지 읽기, 배열 형식으로 출력

const liMaker = (text) => { // 화살표 함수, 기존 함수와 다른 함수 사용법(하단 링크 참고)
const li = document.createElement('li'); // li 태그 객체 생성
li.textContent = text;
ul.appendChild(li); // ul태그 내에 li태그 추가
}

form.addEventListener('submit', function(e) { //엔터를 누르는 경우 
e.preventDefault(); // 엔터 눌렀을 때 새로 실행되지 않음, 계속 작동함

itemsArray.push(input.value); //새로운 입력 값을 배열에 삽입
localStorage.setItem('items', JSON.stringify(itemsArray)); //로컬 스토리지 배열 형식으로 저장(입력 한 값이 있음)
liMaker(input.value); //값을 li 객체에 추가
input.value = ""; //입력 후 문자열
});

data.forEach(item => { //배열 각 요소에 실행
liMaker(item);
});