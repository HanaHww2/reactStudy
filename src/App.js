import React, { useState } from "react";
import './App.css';
import Sub from "./Sub";

function App() {
  // let number = 1; // 단순히 변수를 선언하면, React가 관리하는 상태값이 아니다.
  // React 내의 hooks 라이브러리 활용
  // -> hooks의 상태값으로 선언된다.
  const[number, setNumber] = useState(1); 

  const add = () => {
    //number++; // 단순히 변수 값을 직접 변경
    setNumber(number + 1); // 리액트에 number 값의 변경을 요청하는 함수
    console.log("add", number);
  };

  // 상태값이 변경되면 렌더링(rebuild)이 발생
  // rebuild 시 하위의 모든 자식 컴포넌트들이 다시 생성될 수 있다.
  return (
  <div>
    <h1>숫자 : {number}</h1>
    <button onClick={add}>더하기</button>
    <Sub></Sub>
  </div>
  );
}

export default App;
