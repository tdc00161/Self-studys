// type of ""; = 타입 알아보는 방법

typeof '문자열';

'how\'re you?'
// 작은 따옴표를 반복해서 사용하고 싶을때 \ 사용

'how\\re you?' 
// 문장에 \ 를 넣고 싶을때 \\ 두 번 넣어주기

// `ㅇㅇㅇㅇㅇ`
// `(백틱)을 사용하면 줄바꿈도 가능함

'123'+5
console.log(typeof ('123'+5))
typeof '123'+5

// length : array 배열 길이(개수) 확인
const array = [1,2,3,4,5];

console.log(array.length);

// array 배열 추가 , push 를 많이 사용함
array[array.length] = 6;
array.push(7);

console.log(array);

// unshift : 요소 맨 앞에 추가
array.unshift(0);

console.log(array);

// pop() : 배열에서 마지막 요소 제거
array.pop();

console.log(array);

// shift() : 첫번째 요소 제거
array.shift();

console.log(array);

// slice() : 해당 인덱스부터 끝까지 모든 요소를 제거
array.splice(3);

console.log(array);

array.splice(2,3);

console.log(array);

array.splice(1,0,4);

// include() : 배열에 특정요소 검색 기능

array.includes(4);
// indexOf(), lastIndexOf(): 요소의 인덱스 위치를 검색 가능

array.indexOf(2);

console.log(array);

let i = 0;
while(i < array.length) {
    console.log(array[i]);
    i++;
}

// at(): 배열의 특정위치 값 출력, 음수값을 입력할 수 있음
// 단, array.at(2) = 형태로는 못 입력함.

array.at(2);

console.log(array.at(2));

// 함수 선언시 파라미터, 매개변수 / 호출시 아규먼트, 인수

// 객체끼리 비교시에는 False 값이 나오기때문에 객체를 변수에 선언해놓고 사용해야함.
