// 1~ 100 내에 숫자 랜덤 뽑기
console.log(Math.floor(Math.random()*100)+1)

/*
arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => { return 계산값 };
*/

// 성인만 추출하여 배열로 정렬

let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 42 },
  ];
  
  let result = userList.reduce((prev, cur)=>{
    if(cur.age > 19) {
      prev.push(cur.name);
    }
    return prev;
  },[])

// 매번 받는 배열 값이 다를때 배열안에 해당값 더하기

function add(...numbers) {
  let result = 0;

  numbers.forEach((num) => (result += num));
  console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

//user 객체를 만들어 주는 생성자 함수

function User(name, age, ...skills){
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);