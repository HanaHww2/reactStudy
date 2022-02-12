import React, { useState } from "react";
import './App.css';

function App() {

  console.log("App 실행됨")// rendering시 로그가 찍힌다.
  
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
    
    sample.push({id: 5, name:"조자룡"}) // 데이터가 추가되었지만 레퍼런스 변경이 없으므로 re-rendering 수행하지 않음
    console.log(sample);
    const newSample = sample.concat({id: 6, name:"가나다"})
    console.log(newSample);

    // setUsers([...users, ...sample]); // 기존 데이터를 업데이트
    // 새로운 데이터로 업데이트, 같은 데이터를 갖고 있지만 "레퍼런스"가 다르면 rerendering 수행
    setUsers(newSample);
    // setUsers([...sample, newData]); 스프레드 연산자를 사용하면 레퍼런스의 변경이 일어나므로 rerendering 수행
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
