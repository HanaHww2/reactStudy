import { createRef, useRef, useState } from "react";
import "./App.css";

function App() {
  const myRef = useRef(null);
  const [list, setList] = useState([
    { id: 1, name: "홍길동" },
    { id: 2, name: "임꺽정" },
  ]);
  const myRefs = Array.from({ length: list.length }).map(() => createRef()); // list의 길이에 따라 동적으로 ref 배열 생성

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          //myRef.current.style.backgroundColor = "red";
          myRefs[0].current.style.backgroundColor = "red"; // 홍길동 색 변경
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
      <div>
        {list.map((user, index) => (
          <h1 ref={myRefs[index]}>{user.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
