import { createRef, useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";

// 정적인 데이터이므로, 한번만 로딩되도록 함수 밖에서 선언한다.(비추천)
// 혹은 css 파일을 활용한다.(권장)
const myStyle = {
  backgroundColor: "red",
};

// 따로 js 파일을 만들어서 styled 값들을 관리할 수도 있다.
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <div style={myStyle}>안녕</div>
      <div className="box-style">헬로</div>
      <Title>안녕</Title>
    </div>
  );
}

export default App;
