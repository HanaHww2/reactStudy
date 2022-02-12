import React, { useState } from "react";
import './App.css';

function App() {

  console.log("App 실행됨")// rendering시 로그가 찍힌다.

  // let num = 5;
  const [num, setNum] = useState(5);
  let sample = [
    {id: 1, name:"홍길동"},
    {id: 2, name:"임꺽정"},
    {id: 3, name:"장보고"},
    {id: 4, name:"하나"},
  ];

  const[users, setUsers] = useState([
    {id: 1, name:"홍길동"},
    {id: 2, name:"임꺽정"},
    {id: 3, name:"장보고"},
    {id: 4, name:"하나"},
  ]); // useState(sample); 인 경우에는 download 클릭시 re-rendering이 일어나지 않는다.

  const download = () => {
    
    setUsers([...sample, {id:num, name:"둘"}]); // sample 변수 또한 초기화되므로, 데이터는 항상 5개가 그려진다.
    setNum(num + 1);
    // num++; // re-rendering 발생시 모든 변수가 초기화되므로 이러한 방식으로는 동작하지 않는다.
  }

  // 상태값이 변경되면 렌더링(rebuild)이 발생
  // rebuild 시 하위의 모든 자식 컴포넌트들이 다시 생성될 수 있다.
  return (
  <div>
    <button onClick={download}>다운로드</button>
    {users.map( u => (
      <h1>
        {u.id}. {u.name}
      </h1>
    ))}
  </div>
  );
}

export default App;
