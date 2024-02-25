const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
/*괄호안에서 cors 설정을 희망하는 곳을 지정할 수 있음
지정 안 할 경우 전체에 다 허용.*/

app.get('/', function (req, res) {
  res.send('Hello World')
})

//get 파라미터 변수 받기
app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)

    const q = req.query
    //query 는 key:value로 받는 방식
    console.log(q.q)
    console.log(q.name)

    res.json({"user_id": q.name})
})

//post 변수 받기
app.use(express.json());
app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    // axios, fetch 로 통신
    const q = req.body;
    console.log(b)

    res.sen({"message": 'Hello World'});
})

app.get('/sound/:name', function (req, res) {
    const {name} = req.params
    //{}안에 key 값을 입력 -> 값을 넣음

    if(name == "dog") {
        res.json({'sound':'멍멍'});
    } else if(name == "cat") {
        res.json({'sound':'야옹'});
    } else if(name == "pig") {
        res.json({'sound':'꿀꿀'});
    } else {
        res.json({'sound' : '알수없음'});
    }
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})