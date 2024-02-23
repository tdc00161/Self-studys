// 1~ 100 내에 숫자 랜덤 뽑기

console.log(Math.floor(Math.random()*100)+1)

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

  