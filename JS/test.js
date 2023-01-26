console.log(foo);// undefined(변수 초기화x)
//Reference 에러 : foo가 정의되지 않음, var는 선언적 사용가능

let goo; // let인 경우 TDZ(초기화 안됨) 발생;
var foo;

console.log(goo); //undefined(변수 초기화x)
goo = 1; // 할당 단계가 실행된다.
console.log(goo);

console.log(foo); //undefined(변수 초기화x)
foo = 1; // 할당단계가 실행된다.
console.log(foo);

var foo = 2 //변수 재선언도 가능하다.
let goo2 = 3 //변수 재선언 에러(Uncaught SyntaxError)